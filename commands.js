// команды для бота

const { mainMenu, greeting } = require('./utils/buttons');
const { checkUser } = require('./utils/utils');

const start = async (ctx) => {
  //сначала знакомство или проверка на знакомство
  // запустить функцию проверки на знакомство
  // если есть в базе, то продолжить и передать данные дальше'
  // console.log(ctx.update.message);
  const checkData = await checkUser(
    ctx.update.message.from || ctx.update.callback_query.from
  ); //передаём ctx команды /start
  // если пользователь есть
  // console.log(checkData.status);
  if (!!checkData.data) {
    ctx.session.local_name = checkData.data.local_name;
    // console.log(ctx.session.local_name);
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
  ctx.reply(`🤖 Я принимаю отчёты!!!`, {
    disable_web_page_preview: true,
    parse_mode: 'HTML',
    reply_markup: mainMenu,
  });
};

module.exports = { start, backMenu };
