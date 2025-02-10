require("dotenv").config();
const { Telegraf, Markup, Stage, session } = require("telegraf");

const { reportScene } = require("./scenes/ReportScene");
const { greetingScene } = require("./scenes/greetingScene");
const { start, backMenu } = require("./commands");

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

// bot.start(async (ctx, next) => {
//   await ctx.reply('Бот');
//   await next();
// });

// точка начала
bot.start(start);
// вход в сценарий отчёта
bot.action("report", (ctx) => {
  ctx.scene.enter("report");
});

bot.hears("report", (ctx) => {
  ctx.scene.enter("report");
});
bot.action("greeting", (ctx) => {
  ctx.scene.enter("greeting");
});

// команда запуска бота с опциями
bot.catch((err, ctx) => {
  console.log("Error", err);
  bot.launch();
});

// bot.on('')

// bot.launch({ dropPendingUpdates: true });
bot.launch({ dropPendingUpdates: true });
// bot.startPolling();
// bot.on('message', async (ctx, next) => {

// });

//пока нахуй
// function wait(timeout = 2000) {
//   return (ctx, next) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log('xyu');
//         resolve('xyu');
//       }, timeout);
//     }).then((value) => console.log(value));
//   };
// }

// function groupHandler(timeout = 1000, ctx, next) {
//   const map = new Map();
//   console.log(2);
//   return () => {
//     console.log(ctx);
//     const message = ctx.update;
//     console.log(3);
//     if (!map.get(message.chat.id)) {
//       map.set(message.chat.id, new Map());
//     }
//     const userMap = map.get(message.chat.id);
//     if (!userMap.get(message.update_id)) {
//       userMap.set(message.update_id, {
//         resolve: () => {},
//         messages: [],
//       });
//     }
//     const messageGroupOptions = userMap.get(message.update_id);
//     messageGroupOptions.resolve(false);
//     messageGroupOptions.messages.push(message.text);
//     console.log(1);

//     return new Promise((resolve) => {
//       messageGroupOptions.resolve = resolve;
//       console.log('внутри');
//       setTimeout(() => resolve(true), timeout);
//     }).then((value) => {
//       if (value == true) {
//         ctx.session.report = messageGroupOptions.messages.join(' ');
//         console.log(`Количество сообщений: ${userMap.size}`);
//         userMap.delete(message.update_id);
//         if (userMap.size === 0) {
//           map.delete(message.chat.id);
//         }
//         return next();
//       }
//     });
//   };
// }
