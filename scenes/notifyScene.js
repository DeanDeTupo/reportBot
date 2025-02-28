require('dotenv').config();
const { BaseScene } = require('telegraf');
const { notify } = require('../utils/buttons');

const { backMenu, start } = require('../commands');
const { registerUser, setUserNotification } = require('../utils/utils');
const { notifyStatusMessage } = require('../utils/messages');
const notifyScene = new BaseScene('notify');

//сработает, когда запустим сценарий reportScene
notifyScene.enter((ctx, next) => {
  if (!ctx.session.enableNotify) ctx.session.enableNotify = false;
  const status = ctx.session.enableNotify;
  ctx.editMessageText(notifyStatusMessage(status), {
    parse_mode: 'Markdown',
    reply_markup: notify(status),
  });
});

notifyScene.action('notifyToggle', (ctx, next) => {
  let status = ctx.session.enableNotify;
  status = !status;
  ctx.session.enableNotify = status;

  ctx.editMessageText(notifyStatusMessage(status), {
    parse_mode: 'Markdown',
    reply_markup: notify(status),
  });
});

notifyScene.action('exit_notify', async (ctx, next) => {
  console.log(ctx.session);
  // запись в базу данных
  try {
    await setUserNotification(ctx.session.id, ctx.session.enableNotify);
  } catch (err) {
    console.log('Pizda', err);
  }
  ctx.scene.leave();
  return backMenu(ctx);
});

module.exports = { notifyScene };
