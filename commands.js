// команды для бота

const { mainMenu, greeting } = require('./utils/buttons');
const { checkUser, refreshData } = require('./utils/utils');

const start = async (ctx) => {
  //убираем обработку команд для групповых чатов
  console.log(ctx.update);

  if (ctx.update.message.chat.id < 0) return;
  //сначала знакомство или проверка на знакомство
  // запустить функцию проверки на знакомство
  // если есть в базе, то продолжить и передать данные дальше'
  // console.log(ctx.update.message);
  const userId = ctx.update.message?.from || ctx.update.callback_query.from;
  const checkData = await checkUser(userId); //передаём ctx команды /start

  // если пользователь есть
  // console.log(checkData.status);
  if (!!checkData.data) {
    refreshData(checkData.data, ctx);
    // ctx.session.local_name = checkData.data.local_name;
    // ctx.session.id = checkData.data.id;
    // ctx.session.enableNotify = checkData.data.enableNotify || false;
    console.log(ctx.session);
    ctx.reply(`🤖 Я принимаю отчёты`, { reply_markup: mainMenu });
  }
  if (!checkData.data) {
    ctx.reply(`Давай познакомимся`, {
      parse_mode: 'Markdown',
      reply_markup: greeting,
    });
  }
};

const backMenu = (ctx) => {
  // ctx.editMessageText(`🤖 Я принимаю отчёты`, {
  ctx.editMessageText(`🤖 Я принимаю отчёты!!!`, {
    disable_web_page_preview: true,
    parse_mode: 'HTML',
    reply_markup: mainMenu,
  });
};
const toStart = (ctx) => {
  // ctx.editMessageText(`🤖 Я принимаю отчёты`, {
  ctx.reply(`🤖 Я принимаю отчёты!!!`, {
    disable_web_page_preview: true,
    parse_mode: 'HTML',
    reply_markup: mainMenu,
  });
};

module.exports = { start, backMenu, toStart };
