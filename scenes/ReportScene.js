require('dotenv').config();
const {
  Telegraf,
  Markup,
  Extra,
  Stage,
  session,
  BaseScene,
} = require('telegraf');
const {
  setProfession,
  setKassaLocation,
  setPhotoLocation,
  preConfirm,
  confirmReport,
} = require('../utils/buttons');
const { createReport } = require('../utils/messages');

const reportScene = new BaseScene('report');
const { start, backMenu } = require('../commands');
const { DICT } = require('../utils/dictionary');

//сработает, когда запустим сценарий reportScene

reportScene.enter(async (ctx, next) => {
  console.log('Отчёт. ШАГ 1.начало сценария');

  await ctx.editMessageText('Укажи должность', {
    parse_mode: 'HTML',
    reply_markup: setProfession,
  });
  await next();
});

// выбираем Локацию
reportScene.action(/profession_(.*)/, (ctx) => {
  console.log('Отчёт. ШАГ 2.выбор должности');
  const prof = ctx.match[1];
  ctx.session.profession = prof;
  const setLocation = prof === 'kassir' ? setKassaLocation : setPhotoLocation;
  ctx.editMessageText(
    `Должность: ${DICT[ctx.session.profession]}
    Выбери локацию: `,
    { parse_mode: 'MarkdownV2', reply_markup: setLocation }
  );
});

// проверяем анкету
reportScene.action(/loc_(.*)/, (ctx) => {
  console.log(`ШАГ 3. выбор локации`);
  const location = ctx.match[1];
  ctx.session.location = location;
  ctx.editMessageText(
    `Я: ${DICT[ctx.session.profession]}\nЛокация: ${
      DICT[ctx.session.location]
    }\n\nВсё верно? `,
    { parse_mode: 'MarkdownV2', reply_markup: preConfirm }
  );
});
// НАЗАД к профессии
reportScene.action('to_profession', (ctx) => {
  ctx.editMessageText('Выбери должность', { reply_markup: setProfession });
});
// НАЗАД к Локации
reportScene.action('to_location', (ctx) => {
  const setLocation =
    ctx.session.profession === 'kassir' ? setKassaLocation : setPhotoLocation;
  ctx.editMessageText(
    `Я: ${DICT[ctx.session.profession]}\n\nВыбери локацию: `,
    { parse_mode: 'MarkdownV2', reply_markup: setLocation }
  );
});

// Подтверждение Анкеты:
reportScene.action('preConfirmed', (ctx) => {
  ctx.editMessageText(ctx.update.callback_query.message.text);

  ctx.reply('А теперь напиши отчет одним сообщением');
});

//слушаем ТЕКСТОВЫЙ ОТЧЕТ

reportScene.on('text', (ctx) => {
  const reportFromUser = ctx.update.message.text;

  if (reportFromUser === '/start') {
    ctx.scene.leave();
    ctx.session.profession = null;
    ctx.session.location = null;
    return backMenu;
  }
  ctx.session.reportType = 'text';
  ctx.session.reportText = reportFromUser;
  if (reportFromUser.length < 10) {
    ctx.reply('слишком мало! пиши нормальный отчет!');
    ctx.session.report = null;
    return;
  }
  ctx.reply('Принял! Отправляем это начальству?', {
    reply_markup: confirmReport,
  });
});

//--------------------------------
const map = new Map();
// map.resolve = (value) => {
//   Promise.resolve(value);
// };
// -------------------------------

//слушаем ФОТО ОТЧЕТ
reportScene.on('photo', async (ctx) => {
  // MediaGroup
  if (ctx.update.message.media_group_id) {
    return await handleMediaGroup(1500, ctx);
  } else {
    ctx.session.reportType = 'photo';
    const reportFromUser = ctx.message;

    ctx.session.photoReport = reportFromUser;

    ctx.reply('Принял! Отправляем это начальству?', {
      reply_markup: confirmReport,
    });
  }
});

// ---------------------------------------------------
// Отправил отчёт в группу
reportScene.action('report_ok', async (ctx) => {
  // console.log(ctx.session);

  // Отправляем отчет в группу для отчётов - как обработать ошибку эту?

  try {
    // для текстовых отчётов
    if (ctx.session.reportType === 'text') {
      return ctx.telegram.sendMessage(
        process.env.TEST_GROUP_ID,
        createReport(
          ctx.session.reportText,
          ctx.session.profession,
          ctx.session.location,
          ctx.session.local_name
        ),
        {
          disable_notification: true,
          parse_mode: 'HTML',
        }
      );
    }
    //для фото отчёта
    if (ctx.session.reportType == 'photo') {
      const message = ctx.session.photoReport;

      // оформим сообщение
      message.caption = createReport(
        message.caption,
        ctx.session.profession,
        ctx.session.location,
        ctx.session.local_name
      );
      ctx.session.reportType = null;
      ctx.session.photoReport = null;
      return ctx.telegram.sendCopy(
        process.env.TEST_GROUP_ID,
        // message.chat.id,
        message,
        {
          disable_notification: true,
          parse_mode: 'HTML',
        }
      );
    }
    // Обработка МЕДИАГРУППЫ
    if (ctx.session.reportType == 'mediaGroup') {
      // console.log(ctx.session.mediaGroupReport);
      const text = createReport(
        ctx.session.mediaGroupReport.caption,
        ctx.session.profession,
        ctx.session.location,
        ctx.session.local_name
      );
      const serializedMedia = ctx.session.mediaGroupReport.media;
      serializedMedia[0].caption = text;
      serializedMedia[0].parse_mode = 'HTML';
      ctx.telegram.sendMediaGroup(
        process.env.TEST_GROUP_ID,
        JSON.stringify(serializedMedia)
      );
    }
    await ctx.reply('Спасибо за отчёт');
  } catch (error) {
    console.log(error);
    ctx.reply('Что-то пошло не так... ');
    return;
  } finally {
    ctx.scene.leave();
    return backMenu(ctx);
  }
});

// Отчёт НЕ ОК
// reportScene.action('report_not_ok', (ctx) => {
//   ctx.editMessageText('')
// });

//ловим конец сценария
reportScene.action('to_menu', (ctx) => {
  ctx.scene.leave();
  return backMenu(ctx);
});

// reportScene.on((err, ctx) => {
//   console.log("Error", err);
// });

module.exports = {
  reportScene,
};

function handleMediaGroup(timeout = 1000, ctx) {
  // для каждого часа свой new Map()
  if (!map.get(ctx.update.message.chat.id)) {
    map.set(ctx.update.message.chat.id, new Map());
  }
  // для каждого mediaGroupId - свой объект
  const userMap = map.get(ctx.update.message.chat.id);
  if (!userMap.get(ctx.update.message.media_group_id)) {
    userMap.set(ctx.update.message.media_group_id, {
      media: [],
      resolve: (value) => {
        Promise.resolve(value);
      },
    });
  }

  const messageGroup = userMap.get(ctx.update.message.media_group_id);
  const photoMessage = ctx.update.message;
  const photoSetLength = photoMessage.photo.length;
  const photoObj = {
    type: 'photo',
    media: photoMessage.photo[photoSetLength - 1].file_id,
  };
  // текстовую подпись выносим в отдельное свойство объекта
  if (!!photoMessage.caption) messageGroup.caption = photoMessage.caption;

  messageGroup.media.push(photoObj);
  try {
    messageGroup.resolve(false);
  } catch (err) {
    console.log('messageGroup.resolve(false) ' + err);
  }

  return new Promise((resolve) => {
    messageGroup.resolve = resolve;
    setTimeout(() => {
      resolve(true);
    }, timeout);
  }).then((value) => {
    if (value == true) {
      // создать  медиаgroup отчёт
      ctx.session.reportType = 'mediaGroup';
      delete messageGroup.resolve;
      ctx.session.mediaGroupReport = { ...messageGroup };
      // очистить map:
      userMap.delete(ctx.update.message.media_group_id);
      if (userMap.size == 0) {
        map.delete(ctx.update.message.chat.id);
      }

      ctx.reply('Принял! Отправляем это начальству?', {
        reply_markup: confirmReport,
      });
    }
  });
}

/**
 * mediaGroup = [{"type": "photo", "media": "file_id"}, ... {}]
 *
map  = {
  chat_id1: {
    mediaGroup1: {
      media: [],
      resolve: (value) => {Promise.resolve(value)}
    },
    mediaGroup2: {
      media: [],
      resolve: (value) => {Promise.resolve(value)}
    },
  },
  chat_id2: {
    mediaGroup1: {
      media: [],
      resolve: (value) => {Promise.resolve(value)}
    },
    mediaGroup2: {
      media: [],
      resolve: (value) => {Promise.resolve(value)}
    },
  },

}
 */
