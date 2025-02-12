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
  // console.log(ctx.session);
  // console.log(ctx.update);
  ctx.editMessageText(ctx.update.callback_query.message.text);
  console.log(ctx.session);

  ctx.reply('А теперь напиши отчет одним сообщением');
});

//ОБРАБОТКА ДОЛЖНОСТИ И ЛОКАЦИИ
//слушаем на предмет ТЕКСТА
reportScene.on('text', async (ctx) => {
  const reportType = 'text';
  ctx.session.reportType = reportType;
  const ReportFromUser = ctx.update.message.text;
  ctx.session.reportText = ReportFromUser;
  if (ReportFromUser === '/start') {
    ctx.scene.leave();
    ctx.session = null;
    return backMenu;
  }
  if (ReportFromUser.length < 30) {
    ctx.reply('слишком мало! пиши нормальный отчет!');
    ctx.session.report = null;
    return;
  }
  ctx.reply('Принял! Отправляем это начальству?', {
    reply_markup: confirmReport,
  });
});
//ОБРАБАТЫВАЕМ
reportScene.on('photo', (ctx) => {
  const reportType = 'photo';
  const reportFromUser = ctx.message;
  ctx.session.photoReport = reportFromUser;
  ctx.session.reportType = reportType;
  ctx.reply('Принял! Отправляем это начальству?', {
    reply_markup: confirmReport,
  });
});

// Отправка отчёта в группу
reportScene.action('report_ok', async (ctx) => {
  console.log(ctx.session);
  await ctx.reply('Спасибо за отчёт');

  // Отправляем отчет в группу для отчётов
  ctx.telegram.sendMessage(
    process.env.TEST_GROUP_ID,
    createReport(
      ctx.session.report,
      ctx.session.profession,
      ctx.session.location
    ),
    {
      disable_notification: true,
      parse_mode: 'HTML',
    }
  );
  // |______________________________________________
  // |добавить сообщение о том, что отчёт успешно отправлен
  // |_______________________________________________
  // |______________________________________________
  // |добавить обработку фото
  // |_______________________________________________
  ctx.scene.leave();
  return backMenu(ctx);
});

// Отчёт НЕ ОК
// reportScene.action('report_not_ok', (ctx) => {
//   ctx.editMessageText('')
// });

//ловим конец сценария
reportScene.action('to_menu', (ctx) => {
  ctx.scene.leave();
  console.log('вышел из сценария');
  return backMenu(ctx);
});

module.exports = {
  reportScene,
};

async function groupHandler(timeout = 1000) {
  const map = new Map();
  return (ctx, next) => {
    const message = ctx.update;
    if (!map.get(message.chat.id)) {
      map.set(message.chat.id, new Map());
    }
    const userMap = map.get(message.chat.id);
    if (!userMap.get(message.update_id)) {
      userMap.set(message.update_id, {
        resolve: () => {},
        messages: [],
      });
    }
    const messageGroupOptions = userMap.get(message.update_id);
    messageGroupOptions.resolve(false);
    messageGroupOptions.messages.push(message.text);
    console.log(1);

    return new Promise((resolve) => {
      messageGroupOptions.resolve = resolve;
      console.log('внутри');
      setTimeout(() => resolve(true), timeout);
    }).then((value) => {
      if (value == true) {
        ctx.session.report = messageGroupOptions.messages.join(' ');
        console.log(`Количество сообщений: ${userMap.size}`);
        userMap.delete(message.update_id);
        if (userMap.size === 0) {
          map.delete(message.chat.id);
        }
        return next();
      }
    });
  };
}

// `Я: ${DICT[ctx.session.profession]}\nЛокация: ${DICT[ctx.session.location]}\n\nВыбери локацию: `,
