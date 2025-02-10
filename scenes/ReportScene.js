require("dotenv").config();
const {
  Telegraf,
  Markup,
  Extra,
  Stage,
  session,
  BaseScene,
} = require("telegraf");
const {
  setProfession,
  setKassaLocation,
  setPhotoLocation,
  preConfirm,
  confirmReport,
} = require("../utils/buttons");
const { createReport } = require("../utils/messages");

const reportScene = new BaseScene("report");
const { start, backMenu } = require("../commands");
const { DICT } = require("../utils/dictionary");

//сработает, когда запустим сценарий reportScene

reportScene.enter(async (ctx, next) => {
  console.log("Отчёт. ШАГ 1.начало сценария");

  await ctx.editMessageText("Укажи должность", {
    parse_mode: "HTML",
    reply_markup: setProfession,
  });
  await next();
});

// выбираем Локацию
reportScene.action(/profession_(.*)/, (ctx) => {
  console.log("Отчёт. ШАГ 2.выбор должности");
  const prof = ctx.match[1];
  ctx.session.profession = prof;
  const setLocation = prof === "kassir" ? setKassaLocation : setPhotoLocation;
  ctx.editMessageText(
    `Должность: ${DICT[ctx.session.profession]}
    Выбери локацию: `,
    { parse_mode: "MarkdownV2", reply_markup: setLocation }
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
    { parse_mode: "MarkdownV2", reply_markup: preConfirm }
  );
});
// НАЗАД к профессии
reportScene.action("to_profession", (ctx) => {
  ctx.editMessageText("Выбери должность", { reply_markup: setProfession });
});
// НАЗАД к Локации
reportScene.action("to_location", (ctx) => {
  const setLocation =
    ctx.session.profession === "kassir" ? setKassaLocation : setPhotoLocation;
  ctx.editMessageText(
    `Я: ${DICT[ctx.session.profession]}\n\nВыбери локацию: `,
    { parse_mode: "MarkdownV2", reply_markup: setLocation }
  );
});

// Подтверждение Анкеты:
reportScene.action("preConfirmed", (ctx) => {
  // console.log(ctx.session);
  // console.log(ctx.update);
  ctx.editMessageText(ctx.update.callback_query.message.text);
  console.log(ctx.session);

  ctx.reply("А теперь напиши отчет одним сообщением");
});

//слушаем ТЕКСТОВЫЙ ОТЧЕТ
reportScene.on("text", (ctx) => {
  const reportFromUser = ctx.update.message.text;
  console.log("TEXT!!!!");

  if (reportFromUser === "/start") {
    console.log(1234);

    ctx.scene.leave();
    ctx.session = null;
    return backMenu;
  }
  ctx.session.reportType = "text";
  ctx.session.reportText = reportFromUser;
  if (reportFromUser.length < 10) {
    ctx.reply("слишком мало! пиши нормальный отчет!");
    ctx.session.report = null;
    return;
  }
  ctx.reply("Принял! Отправляем это начальству?", {
    reply_markup: confirmReport,
  });
});
//слушаем ФОТО ОТЧЕТ
reportScene.on("photo", (ctx) => {
  // Слушаем MediaGroup--------------
  if (!!ctx.message.media_group_id) {
    console.log("mediagroup");
    ctx.session.reportType || ctx.session.reportType == "mediagroup";

    if (!ctx.session.mediaGroup) ctx.session.mediaGroup = [];
    ctx.session.mediaGroup.push(ctx.update.message);

    // слушаем photo
  } else {
    console.log("----photo----");
    ctx.session.reportType = "photo";
    const reportFromUser = ctx.message;
    console.log(reportFromUser);

    ctx.session.photoReport = reportFromUser;
  }
  ctx.reply("Принял! Отправляем это начальству?", {
    reply_markup: confirmReport,
  });
});
//слушаем ФОТО ОТЧЕТ
reportScene.on("photo", (ctx) => {
  // Слушаем MediaGroup--------------
  if (!!ctx.message.media_group_id) {
    console.log("mediagroup");
    ctx.session.reportType || ctx.session.reportType == "mediagroup";

    if (!ctx.session.mediaGroup) ctx.session.mediaGroup = [];
    ctx.session.mediaGroup.push(ctx.update.message);

    // слушаем photo
  } else {
    console.log("----photo----");
    ctx.session.reportType = "photo";
    const reportFromUser = ctx.message;
    console.log(reportFromUser);

    ctx.session.photoReport = reportFromUser;
  }
  ctx.reply("Принял! Отправляем это начальству?", {
    reply_markup: confirmReport,
  });
});

reportScene.on("media_group", (ctx) => {
  console.log(media_group);
});

// ---------------------------------------------------
// Отправил отчёт в группу
reportScene.action("report_ok", async (ctx) => {
  console.log(ctx.session);
  await ctx.reply("Спасибо за отчёт");

  // Отправляем отчет в группу для отчётов - как обработать ошибку эту?

  try {
    // для текстовых отчётов
    if (ctx.session.reportType === "text") {
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
          parse_mode: "HTML",
        }
      );
    }
    //для фото отчёта
    if (ctx.session.reportType == "photo") {
      const message = ctx.session.photoReport;

      // оформим сообщение
      message.caption = createReport(
        message.caption,
        ctx.session.profession,
        ctx.session.location,
        ctx.session.local_name
      );
      return ctx.telegram.sendCopy(
        process.env.TEST_GROUP_ID,
        // message.chat.id,
        message,
        {
          disable_notification: true,
          parse_mode: "HTML",
        }
      );
    }
    // Обработка МЕДИАГРУППЫ
  } catch (error) {
    console.log(error);
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
reportScene.action("to_menu", (ctx) => {
  ctx.scene.leave();
  console.log("вышел из сценария");
  return backMenu(ctx);
});

// reportScene.on((err, ctx) => {
//   console.log("Error", err);
// });

module.exports = {
  reportScene,
};

// `Я: ${DICT[ctx.session.profession]}\nЛокация: ${DICT[ctx.session.location]}\n\nВыбери локацию: `,
