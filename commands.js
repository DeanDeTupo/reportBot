// команды для бота

const { mainMenu } = require('./utils/buttons');

const start = (ctx) => {
  ctx.reply(`🤖 Я принимаю отчёты`, mainMenu);
};
const backMenu = (ctx) => {
  // ctx.editMessageText(`🤖 Я принимаю отчёты`, {
  ctx.reply(`🤖 Я принимаю отчёты`, {
    disable_web_page_preview: true,
    parse_mode: 'HTML',
    ...mainMenu,
  });
};

module.exports = { start, backMenu };
