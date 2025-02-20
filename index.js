require('dotenv').config();
const { Telegraf, Markup, Stage, session } = require('telegraf');

const { reportScene } = require('./scenes/ReportScene');
const { greetingScene } = require('./scenes/greetingScene');
const { start, backMenu } = require('./commands');

//создаём экземплр бота
const bot = new Telegraf(process.env.API_KEY_BOT);

// опции
const options = { dropPendingUpdates: true };

//подгружаем сценарии
const stage = new Stage([reportScene, greetingScene]);

bot.use(session());
bot.use(stage.middleware());
bot.use((ctx, next) => {
  return next();
});

// точка начала
bot.start(start);
// вход в сценарий отчёта
bot.action('report', (ctx) => {
  if (!ctx.session.local_name) return ctx.scene.enter('greeting');
  ctx.scene.enter('report');
});

bot.action('greeting', (ctx) => {
  ctx.scene.enter('greeting');
});

// команда запуска бота с опциями
bot.catch((err, ctx) => {
  console.log('Error', err);
  bot.launch();
});

bot.launch({ dropPendingUpdates: true });

// bot.on('message', async (ctx, next) => {});
