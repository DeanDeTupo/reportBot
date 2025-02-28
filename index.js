require('dotenv').config();
const { Telegraf, Markup, Stage, session } = require('telegraf');

const { reportScene } = require('./scenes/ReportScene');
const { greetingScene } = require('./scenes/greetingScene');
const { start, backMenu } = require('./commands');
const { notifyScene } = require('./scenes/notifyScene');
const {
  getNotificationList,
  checkUser,
  refreshData,
  checkUserData,
} = require('./utils/utils');

//создаём экземплр бота
const bot = new Telegraf(process.env.API_KEY_BOT);

// опции
const options = { dropPendingUpdates: true };

//подгружаем сценарии
const stage = new Stage([reportScene, greetingScene, notifyScene]);

bot.use(session());
bot.use(stage.middleware());
bot.use((ctx, next) => {
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

  ctx.scene.enter('notify');
});

bot.catch((err, ctx) => {
  console.log('Error', err);
  bot.launch();
});

// напоминание
async function sendNotification() {
  // взять список людей подписанных на уведомления
  const usersToNotify = await getNotificationList();
  // console.log(usersToNotify);

  // just to delay
  const notifyInterval = setInterval(() => {
    // если список кончился
    if (usersToNotify.length === 0) {
      return clearInterval(notifyInterval);
    }
    console.log('отправялем');
    const user = usersToNotify.pop();
    bot.telegram.sendMessage(
      user.id,
      `${user.local_name.first_name}, пора написать отчёт\nЖми /start`,
      { parse_mode: 'Markdown' }
    );
  }, 1000);
  // setInterval(async () => {
  // }, 10000);
  // setTimeout(() => {
  // }, 5000);
}
// sendNotification();
function createNotificationTime() {
  let input = process.env.TIME;
  const time = new Date();

  time.setHours(...input.split(':'));

  return time;
}
const purposeTS = createNotificationTime();

// выполним функцию в определенное время дня в 04:00
// get current time

let time = process.env.TIME;
console.log(typeof time);
const nowTS = new Date().getTime();
// get timestamp  of purpose time today
const timeout = purposeTS - nowTS;
const DAY_LENGTH = 24 * 60 * 60 * 1000;
const delay = timeout > 0 ? timeout : DAY_LENGTH + timeout;
console.log(delay);
setTimeout(async function everyDayNotify() {
  await sendNotification();
  setTimeout(everyDayNotify, DAY_LENGTH);
}, delay);

// команда запуска бота с опциями
bot.launch(options);
// bot.startPolling();
// bot.on('message', async (ctx, next) => {
//   console.log(ctx.update);
// });
