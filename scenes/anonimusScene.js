require('dotenv').config();
const { EventEmitter } = require('events');

const { Markup, BaseScene, default: Telegraf } = require('telegraf');

const { backMenu, start, toStart } = require('../commands');
const {
  getUsersForAnonimMessage,
  getUserById,
  getNickname,
} = require('../utils/utils');
// console.log(typeof WizardScene);
const anonimusScene = new BaseScene('anon');

anonimusScene.enter(async (ctx, next) => {
  let nickname;
  try {
    nickname = await getNickname(ctx.update.message.from.id); //boolean
    ctx.session.step = 0;
    ctx.session.nickname = nickname;
    console.log(
      stringName(ctx.session.local_name) +
        ` ака ${ctx.session.nickname} ` +
        ' вошел в АНОНИМНЫЙ СЦЕНАРИЙ'
    );
    ctx.reply(
      'Добро пожаловать в АНОНИМНЫЕ СООБЩЕНИЯ\n\nОтправь мне фамилию сотрудника',
      {
        reply_markup: Markup.inlineKeyboard([
          // [Markup.callbackButton('Выбрать сотрудника', 'choose_person')],
          [Markup.callbackButton('Приватность', 'privacy')],
          [Markup.callbackButton('Выход', 'exit')],
        ]),
      }
    );
    next();
  } catch (error) {
    ctx.scene.leave();
    ctx.reply('сервис недоступен');
    return backMenu(ctx);
  }
});

anonimusScene.action('choose_person', async (ctx, next) => {
  const userList = await getUsersForAnonimMessage();
  ctx.reply(
    'найдено ' + userList.length + ' людей' + 'введите фамилию сотрудника'
  );
  // userList.forEach((user) => console.log(stringName(user.local_name)));
});

anonimusScene.on('text', async (ctx) => {
  const userInput = ctx.update.message.text;
  console.log(`введено ${userInput}`);
  if (ctx.session.step === 0) {
    await searchPersonHandler(ctx, userInput);
  } else if (ctx.session.step === 1) {
    await messageToUserHandler(ctx, userInput);
  }
});

// реакция на выбор сотрудника
anonimusScene.action(/userID_(.*)/, async (ctx) => {
  ctx.session.step = 1;
  const userID = ctx.match[1];
  const targetUser = await getUserById(userID);
  const { id, local_name } = targetUser;
  ctx.session.messageToUser = { id, local_name };
  ctx.editMessageText('введи текстовое сообщение пользователю', {
    reply_markup: Markup.inlineKeyboard([
      [Markup.callbackButton('Назад', 'anon_start')],
      [Markup.callbackButton('Выход', 'exit')],
    ]),
  });
  return;
});

anonimusScene.action('anon_start', async (ctx) => {
  ctx.session.step = 0;

  ctx.editMessageText('Отправь мне фамилию сотрудника', {
    reply_markup: Markup.inlineKeyboard([
      // [Markup.callbackButton('Выбрать сотрудника', 'choose_person')],
      [Markup.callbackButton('Приватность', 'privacy')],
      [Markup.callbackButton('Выход', 'exit')],
    ]),
  });
});

anonimusScene.action('exit', (ctx) => {
  // ctx.deleteMessage(ctx.update.message.id);
  // console.log(ctx.update.callback_query);
  ctx.scene.leave();
  return backMenu(ctx);
});

function stringName(local_name) {
  return local_name.second_name + ' ' + local_name.first_name;
}

function makeUsersKeyboard(userlist) {
  const usersKeyboard = userlist.map((user) => {
    return [
      Markup.callbackButton(stringName(user.local_name), 'userID_' + user.id),
    ];
  });
  return Markup.inlineKeyboard([
    ...usersKeyboard,
    [Markup.callbackButton('Назад', 'anon_start')],
  ]);
}

async function searchPersonHandler(ctx, userInput) {
  const userList = await getUsersForAnonimMessage();
  const foundUsers = userList.filter((user) => {
    return (
      user.local_name.second_name
        .toLowerCase()
        .indexOf(userInput.toLowerCase()) > -1
    );
  });
  foundUsers.forEach((user) => console.log(user.local_name));
  if (!foundUsers.length) {
    ctx.reply('ничего не найдено, введи еще раз', {
      reply_markup: Markup.inlineKeyboard([
        [Markup.callbackButton('Назад', 'anon_start')],
        [Markup.callbackButton('Выход', 'exit')],
      ]),
    });
  } else if (foundUsers.length > 5) {
    ctx.reply('введи фамилию конкретную', {
      reply_markup: Markup.inlineKeyboard([
        [Markup.callbackButton('Назад', 'anon_start')],
        [Markup.callbackButton('Выход', 'exit')],
      ]),
    });
  } else {
    ctx.reply('кому напишем сообщение? ', {
      reply_markup: makeUsersKeyboard(foundUsers),
    });
  }
}

async function messageToUserHandler(ctx, userInput) {
  // console.log(`Сообщение: ${ctx.update.message.text}`);
  console.log(`Сообщение: ${userInput}`);
  ctx.session.step = 0;
  // ctx.session.messageStatus = null;
  //
  //
  const sendMessage = new Promise((resolve) => {
    messageListener.emit('anonimMessage', {
      // status: ctx.session.messageStatus,
      to: ctx.session.messageToUser,
      // message: ctx.update.message.text,
      message: userInput,
      from: stringName(ctx.session.local_name),
      resolve: resolve,
    });
  });
  const messageStatus = await sendMessage;
  // console.log(`Промис выполнен с результатом ${messageStatus}`);
  if (!messageStatus) {
    return await ctx.reply('Ошибка, ВВЕДИ другого человека, либо жми ВЫХОД', {
      reply_markup: Markup.inlineKeyboard([
        // [Markup.callbackButton('Выбрать сотрудника', 'choose_person')],
        [Markup.callbackButton('Приватность', 'privacy')],
        [Markup.callbackButton('Выход', 'exit')],
      ]),
    });
  }

  //
  //
  // messageListener.emit('anonimMessage', {
  //   status: ctx.session.messageStatus,
  //   to: ctx.session.messageToUser,
  //   // message: ctx.update.message.text,
  //   message: userInput,
  //   from: stringName(ctx.session.local_name),
  // });
  // надо ждать пока обновится messageStatus
  // >>>можно слушатель повесить
  // через промис
  // let promise = new Promise(resolve => {
  //    mess
  // })
  //

  ctx.reply('Отправлено, выбери кому хочешь написать, либо нажми выход', {
    reply_markup: Markup.inlineKeyboard([
      // [Markup.callbackButton('Выбрать сотрудника', 'choose_person')],
      [Markup.callbackButton('Приватность', 'privacy')],
      [Markup.callbackButton('Выход', 'exit')],
    ]),
  });
}

function messageSenderService(bot) {
  messageListener = new EventEmitter();
  messageListener.on('anonimMessage', async (data) => {
    //
    //
    try {
      await bot.telegram.sendMessage(
        data.to.id,
        data.message
        //    {
        //   reply_markup: Markup.inlineKeyboard([
        //     [Markup.callbackButton('Ответить', 'anon_start')],
        //   ]),
        // }
      );
      data.resolve(true);
      console.log(
        `ОТ: ${data.from} КОМУ: ${stringName(data.to.local_name)} СООБЩЕНИЕ: ${
          data.message
        }`
      );
    } catch (error) {
      data.resolve(false);
      console.log(
        `>>>>>ОШИБКА: ОТ: ${data.from} КОМУ: ${stringName(
          data.to.local_name
        )} СООБЩЕНИЕ: ${data.message}`
      );
      console.log('AnonMsgSendError: ', error);
    }
    //
    //
  });
}

module.exports = { anonimusScene, messageSenderService };
