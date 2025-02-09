// команды для бота

const { mainMenu } = require("./utils/buttons");

const start = (ctx) => {
  ctx.reply(`🤖 Я принимаю отчёты`, {
    reply_markup: mainMenu,
  });
};
const backMenu = (ctx) => {
  // ctx.editMessageText(`🤖 Я принимаю отчёты`, {
  ctx.reply(`🤖 Я принимаю отчёты!!!`, {
    disable_web_page_preview: true,
    parse_mode: "HTML",
    reply_markup: mainMenu,
  });
};

module.exports = { start, backMenu };
