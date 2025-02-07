require('dotenv').config();
const { Telegraf, Markup, Stage, session } = require('telegraf');

const { reportScene } = require('./scenes/ReportScene');
const { start, backMenu } = require('./commands');

//создаём экземплр бота
const bot = new Telegraf(process.env.API_KEY_BOT);

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

// bot.hears('/menu', async (ctx, next) => {
//   await ctx.reply(
//     'Выбери действие:',
//     Markup.inlineKeyboard([[Markup.callbackButton('Отчёт', 'report')]]).extra()
//   );
//   await next();
// });

// точка начала
bot.start(start);
// вход в сценарий отчёта
bot.action('report', (ctx) => {
  ctx.scene.enter('report');
});

bot.on('message', (ctx) => {
  const msg = ctx.reply('Сначала нажми на Кнопку создать отчёт!');
  setTimeout(() => {
    console.log(msg);
  }, 400);
  setTimeout(() => {
    backMenu(ctx);
  }, 800);
});
// bot.hears('report', (ctx) => {
//   ctx.scene.enter('report');
// });

// Сценарий отчёта

bot.launch();
// bot.startPolling();
