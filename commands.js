// команды для бота

const { mainMenu, greeting, adminMainMenu } = require('./utils/buttons');
const { checkUser, refreshData, isAdmin } = require('./utils/utils');

const start = async (ctx) => {
  //убираем обработку команд для групповых чатов

  if (ctx.update.message.chat.id < 0) return;

  // const userId =
  //   (!!ctx.update.message ? ctx.update.message.from : undefined) ||
  //   ctx.update.callback_query.from;
  // const checkData = await checkUser(userId); //передаём ctx команды /start
  // if (!checkData) {
  //   return await ctx.reply(`Давай познакомимся`, {
  //     parse_mode: 'Markdown',
  //     reply_markup: greeting,
  //   });
  // }
  // await refreshData(checkData, ctx);
  if (!ctx.session.isAdmin) {
    return ctx.reply(`🤖 Я принимаю отчёты`, { reply_markup: mainMenu });
  }
  return ctx.reply(`🤖 Приветствую, ${ctx.session.local_name.first_name}`, {
    reply_markup: adminMainMenu,
  });
};

const backMenu = (ctx) => {
  // ctx.editMessageText(`🤖 Я принимаю отчёты`, {
  if (!ctx.session.isAdmin) {
    return ctx.editMessageText(`🤖 Я принимаю отчёты!!!`, {
      disable_web_page_preview: true,
      parse_mode: 'HTML',
      reply_markup: mainMenu,
    });
  }
  return ctx.editMessageText(
    `🤖 Приветствую, ${ctx.session.local_name.first_name}`,
    {
      parse_mode: 'HTML',
      reply_markup: adminMainMenu,
    }
  );
};
const toStart = (ctx) => {
  if (!ctx.session.isAdmin) {
    return ctx.reply(`🤖 Я принимаю отчёты!!!`, {
      disable_web_page_preview: true,
      parse_mode: 'HTML',
      reply_markup: mainMenu,
    });
  }
  return ctx.reply(`🤖 Приветствую, ${ctx.session.local_name.first_name}`, {
    parse_mode: 'HTML',
    reply_markup: adminMainMenu,
  });
};

module.exports = { start, backMenu, toStart };
