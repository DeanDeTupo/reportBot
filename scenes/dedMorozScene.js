const { BaseScene } = require('telegraf');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const { backMenu, start, toStart } = require('../commands');
const dedMorozScene = new BaseScene('dedMoroz');

// const PARTICIPANTS_LIST_PATH = '../data/dedMoroz.json';
const PARTICIPANTS_LIST_PATH = path.resolve(__dirname, '../data/dedMoroz.json');
const isClosedForJoin = process.env.DED_MOROZ_IS_CLOSED;

const DED_MOROZ_MESSAGES = {
  welcome:
    'Становись тайным дед морозом. Присоединиться можно до:' +
    process.env.DED_MOROZ_VOTE_STOP,
  enter: `Жеребьёвка будет ${process.env.DED_MOROZ_VOTE_STOP}\n\nЕще можно отменить участие или изменить желания.`,
  join: `Отлично, записал тебя.\n${process.env.DED_MOROZ_VOTE_STOP} когда подберу для тебя человека\n\n✍🏻Напиши свои пожалания к подарку для Деда Мороза`,
  unjoin: `Ты больше не участвуешь😡\n Ещё есть время присоединиться`,
  wishes: 'Напиши предпочтения для подарка, Это увидит твой тайный Дед Мороз',
  ERRORS: {
    register: 'Не удалось добавить, попробуй ещё раз',
    editWishes: 'Не удалось изменить пожелания, попробуй ещё раз',
  },
};

const DED_MOROZ_BUTTONS = {
  welcome: {
    inline_keyboard: [
      [{ text: 'Участвую!🎅🏼', callback_data: 'join' }],
      [{ text: 'Выход🔙', callback_data: 'exit' }],
    ],
  },
  enter: {
    inline_keyboard: [
      [{ text: 'Напиши свои желания✍🏻', callback_data: 'wishes' }],
      [{ text: 'Не участвую🤬', callback_data: 'unjoin' }],
      [{ text: 'Выход🔙', callback_data: 'exit' }],
    ],
  },
  wishes: {
    inline_keyboard: [[{ text: 'Назад🔙', callback_data: 'enter' }]],
  },
};

dedMorozScene.enter(enterDedMoroz);

async function enterDedMoroz(ctx) {
  // console.log(ctx.session);
  // ищем данные по человеку
  const participantData = await getParticipantData(ctx.session);
  // если не нашли, предлагаем участие
  if (!participantData) {
    // для новых
    return await ctx.editMessageText(DED_MOROZ_MESSAGES.welcome, {
      reply_markup: DED_MOROZ_BUTTONS.welcome,
    });
  }
  // для участников
  const wishes = ctx.session.DED_MOROZ.wishes;
  const subMsg = !!wishes
    ? `Ваши пожелания: ${wishes}`
    : 'Вы ещё не добавили пожелания';
  return await ctx.editMessageText(DED_MOROZ_MESSAGES.enter + subMsg, {
    reply_markup: DED_MOROZ_BUTTONS.enter,
  });
}

const enter = async (ctx) => {
  const wishes = ctx.session.DED_MOROZ.wishes;
  // console.log(wishes);
  const subMsg = !!wishes
    ? `Ваши пожелания: ${wishes}`
    : 'Вы ещё не добавили пожелания';
  return await ctx.reply(DED_MOROZ_MESSAGES.enter + subMsg, {
    reply_markup: DED_MOROZ_BUTTONS.enter,
  });
};

dedMorozScene.action('enter', async (ctx) => {
  const wishes = ctx.session.DED_MOROZ.wishes;
  // console.log(wishes);
  const subMsg = !!wishes
    ? `Ваши пожелания: ${wishes}`
    : 'Вы ещё не добавили пожелания';
  return await ctx.editMessageText(DED_MOROZ_MESSAGES.enter + subMsg, {
    reply_markup: DED_MOROZ_BUTTONS.enter,
  });
});

// присоединиться
dedMorozScene.action('join', async (ctx) => {
  try {
    await registerParticipant(ctx.session);
    return await ctx.editMessageText(DED_MOROZ_MESSAGES.join, {
      reply_markup: DED_MOROZ_BUTTONS.enter,
    });
  } catch (err) {
    return await ctx.editMessageText(DED_MOROZ_MESSAGES.ERRORS.register, {
      reply_markup: DED_MOROZ_BUTTONS.welcome,
    });
  }
});

// НЕ участвую
dedMorozScene.action('unjoin', async (ctx) => {
  try {
    await deleteParticipant(ctx.session);
    return await ctx.editMessageText(DED_MOROZ_MESSAGES.unjoin, {
      reply_markup: DED_MOROZ_BUTTONS.welcome,
    });
  } catch (err) {
    return await ctx.editMessageText(DED_MOROZ_MESSAGES.ERRORS.unjoin, {
      reply_markup: DED_MOROZ_BUTTONS.enter,
    });
  }
});

dedMorozScene.action('wishes', async (ctx) => {
  await ctx.editMessageText(DED_MOROZ_MESSAGES.wishes, {
    reply_markup: DED_MOROZ_BUTTONS.wishes,
  });
});

// handle TEXT
dedMorozScene.on('text', async (ctx) => {
  //   console.log(ctx);
  const input = ctx.update.message.text;
  if (input == '/start') {
    ctx.scene.leave();
    return start(ctx);
  }
  if (!ctx.session.DED_MOROZ) {
    return await ctx.reply('Ты не участвуешь!', {
      reply_markup: DED_MOROZ_BUTTONS.welcome,
    });
  }
  // --------------------------------------------------
  if (input == '/finalCheck') {
    const usersList = await readJson(PARTICIPANTS_LIST_PATH);
    for (let user of usersList) {
      const sendMessage = new Promise((resolve) => {
        messageListener.emit('anonimMessage', {
          // status: ctx.session.messageStatus,
          to: { id: user.id, local_name: user.local_name },
          // message: ctx.update.message.text,
          message:
            'Проверь свои пожелания в Разделе Личный Дед Мороз, всё ли правильно',
          from: 'admin',
          resolve: resolve,
        });
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('отправлено');
    }

    return;
  }
  // ----------------------------------------------------
  try {
    await writeParticipantWishes(ctx.session, input);
    await ctx.reply('Записал твои желания');
    return enter(ctx);
  } catch (err) {
    console.log('Ошибка записи желания, попробуй позже');
    await ctx.reply('Произошла ошибка...Плак');
    return enter(ctx);
  }
});

dedMorozScene.action('exit', async (ctx, next) => {
  ctx.scene.leave();
  delete ctx.session.DED_MOROZ;
  return backMenu(ctx);
});

async function getParticipantData(ctxData) {
  // if (!ctxData) throw new Error('entered DedMoroz without reg/context data');

  const usersList = await readJson(PARTICIPANTS_LIST_PATH);
  const userData = usersList.find((user) => {
    return user.id == ctxData.id;
  });
  if (!userData) return userData;
  ctxData.DED_MOROZ = userData;
  return userData;
}

async function writeParticipantWishes(ctxData, input) {
  const usersList = await readJson(PARTICIPANTS_LIST_PATH);
  const userData = usersList.find((user) => {
    return user.id == ctxData.id;
  });
  userData.wishes = input;
  try {
    await writeJson(usersList);
    ctxData.DED_MOROZ.wishes = input;
  } catch (err) {
    console.log('Ошибка записи желания');
    throw new Error('Ошибка в регистрации');
  }
}

async function registerParticipant(ctxData) {
  const usersList = await readJson(PARTICIPANTS_LIST_PATH);
  participantObj = {
    id: ctxData.id,
    local_name: ctxData.local_name,
    wishes: '',
    target: null,
  };

  usersList.push(participantObj);
  try {
    await writeJson(usersList);
    ctxData.DED_MOROZ = participantObj;
  } catch (err) {
    console.log('Ошибка в регистрации');
    throw new Error('Ошибка в регистрации');
  }
}
async function deleteParticipant(ctxData) {
  const usersList = await readJson(PARTICIPANTS_LIST_PATH);
  removedIdx = usersList.findIndex((user) => user.id == ctxData.id);
  usersList.splice(removedIdx, 1);

  try {
    await writeJson(usersList);
    delete ctxData.DED_MOROZ;
  } catch (err) {
    throw new Error(err);
  }
}

async function readJson(path) {
  const data = await fs.readFile(path, 'utf-8');
  return JSON.parse(data);
}

async function writeJson(data) {
  try {
    await fs.writeFile(PARTICIPANTS_LIST_PATH, JSON.stringify(data, null, 1));
  } catch (err) {
    console.log('ошибка в записи');
    throw new Error(err);
  }
}

// пожелания

module.exports = { dedMorozScene };
