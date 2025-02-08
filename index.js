require("dotenv").config();
const { Telegraf, Markup, Stage, session } = require("telegraf");

const { reportScene } = require("./scenes/ReportScene");
const { start, backMenu } = require("./commands");

//создаём экземплр бота
const bot = new Telegraf(process.env.API_KEY_BOT);

// опции
const options = { dropPendingUpdates: true };

//подгружаем сценарии
const stage = new Stage([reportScene]);

bot.use(session());
bot.use(stage.middleware());
bot.use((ctx, next) => {
  return next();
});

// bot.start(async (ctx, next) => {
//   await ctx.reply('Бот');
//   await next();
// });

// точка начала
bot.start(start);
// вход в сценарий отчёта
bot.action("report", (ctx) => {
  ctx.scene.enter("report");
  // ctx.re;
});

// bot.on("message", (ctx) => {
//   setTimeout(() => {
//     backMenu(ctx);
//   }, 800);
// });

// команда запуска бота с опциями
bot.catch((err, ctx) => {
  console.log("Error", err);
  bot.launch();
});

// bot.on('')

// bot.launch({ dropPendingUpdates: true });
bot.launch({ dropPendingUpdates: true });
// bot.startPolling();
