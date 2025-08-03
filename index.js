require('dotenv').config();
const { Telegraf, Markup, Stage, session } = require('telegraf');

const { reportScene } = require('./scenes/ReportScene');
const { greetingScene } = require('./scenes/greetingScene');
// const { anonimusScene } = require('./scenes/anonimusScene');
const { start, backMenu } = require('./commands');
const { notifyScene } = require('./scenes/notifyScene');
const { checkUserData } = require('./utils/utils');
const { everyDayReport, createReportBotMessage } = require('./utils/events');
const { startUsersNotification } = require('./utils/userNotification');
const { updateDailyReport } = require('./utils/buttons');
// const { messageSenderService } = require('./scenes/anonimusScene');

//создаём экземплр бота
const bot = new Telegraf(process.env.API_KEY_BOT);

// опции
const options = { dropPendingUpdates: true };

//подгружаем сценарии
const stage = new Stage([
  reportScene,
  greetingScene,
  notifyScene,
  // anonimusScene,
]);

bot.use(session());
bot.use(stage.middleware());
bot.use(async (ctx, next) => {
  if (!ctx.session.local_name) {
    const isUser = await checkUserData(ctx);
    // console.log('session', isUser);
    // console.log(ctx.session);
    if (!isUser) return ctx.scene.enter('greeting');
  }

  return next();
});

// точка начала
bot.start(start);
// вход в сценарий отчёта
bot.action('report', async (ctx) => {
  if (!ctx.session.id) {
    const isUser = await checkUserData(ctx);
    if (!isUser) return ctx.scene.enter('greeting');
  }

  ctx.scene.enter('report');
});

bot.action('greeting', (ctx) => {
  ctx.scene.enter('greeting');
});
bot.action('notify', async (ctx) => {
  // убрать

  if (!ctx.session.id) {
    const isUser = await checkUserData(ctx);
    if (!isUser) return ctx.scene.enter('greeting');
  }

  ctx.scene.enter('anon');
});

// -----dailyReport
bot.hears('dailyReport', async (ctx, next) => {
  if (ctx.update.message.chat.id < 0) return;
  await ctx.reply(await createReportBotMessage(), { parse_mode: 'Markdown' });
});

// ----------------anonimus
// bot.hears('Anon', async (ctx, next) => {
//   if (ctx.update.message.chat.id < 0) return;
//   if (!ctx.session.id) {
//     const isUser = await checkUserData(ctx);
//     if (!isUser) return ctx.scene.enter('greeting');
//   }

//   ctx.scene.enter('anon');
// });

bot.action('dailyReport', async (ctx) => {
  await ctx.editMessageText(await createReportBotMessage(), {
    parse_mode: 'Markdown',
    reply_markup: updateDailyReport,
  });
});

bot.action('updateDailyReport', async (ctx) => {
  // console.log(ctx.update.callback_query);
  // если ничего не изменилось
  const prevReport = ctx.update.callback_query.message.text;
  const currentReport = await createReportBotMessage();
  if (prevReport == currentReport.slice(0, currentReport.length - 2)) {
    // console.log('то же самое');
    return;
  }

  await ctx.editMessageText(await createReportBotMessage(), {
    parse_mode: 'Markdown',
    reply_markup: updateDailyReport,
  });
});

bot.action('mainMenu', async (ctx) => {
  await backMenu(ctx);
});
bot.catch((err, ctx) => {
  console.log('Error', err);
  bot.launch();
});

bot.on('left_chat_member', (ctx, next) => {
  console.log('Покинул чат', ctx.update.message.left_chat_member.id);
  //удалить ему свойство isAdmin
});
// напоминание
everyDayReport(bot);
startUsersNotification(bot);
// messageSenderService(bot);
bot.launch(options);
