require('dotenv').config();
const { BaseScene, session } = require('telegraf');
const { greeting, applyGreeting } = require('../utils/buttons');

const greetingScene = new BaseScene('greeting');
const { toStart, start } = require('../commands');
const { parse } = require('dotenv');
const { registerUser } = require('../utils/utils');

//сработает, когда запустим сценарий reportScene
greetingScene.enter((ctx, next) => {
  console.log('начало знакомства');
  ctx.reply(
    `Давай познакомимся!\nОтправь мне свою Фамилию и Имя текстом через пробел в 1 строчку\n\nПример:\n*Петров Иван*`,
    {
      parse_mode: 'Markdown',
    }
  );
});

greetingScene.on('message', (ctx) => {
  //   console.log(ctx);
  if (ctx.update.message.text == '/start') {
    ctx.scene.leave();
    return start(ctx);
  }
  if (!isCorrectInput(ctx)) {
    return ctx.reply(
      `Не распознал сообщение\n\nВведи ФАМИЛИЮ и ИМЯ *текстом*, в 1 строчку\nФамилия и через пробел ИМЯ \nПример:\n*Петров Иван*`,
      { parse_mode: 'MarkdownV2' }
    );
  }
  const userInput = parseName(ctx);
  ctx.session.local_name = userInput;

  ctx.reply(
    `Фамилия: *${userInput.second_name}*\nИмя: *${userInput.first_name}*?\nэти данные видеть офис, вымышленные данные запрещены и караются штрафом! В дальнейшем изменить его будет нельзя\nОставляем?`,
    { parse_mode: 'Markdown', reply_markup: applyGreeting }
  );
});

// ОК, Регистрируем
greetingScene.action('acceptGreeting', async (ctx) => {
  const userName = ctx.session.local_name;
  const registerData = makeRegisterData(ctx, ctx.session.local_name);
  // console.log(
  //   `${userName.second_name} ${userName.first_name} вышел из сценария`
  // );
  try {
    await registerUser(registerData);
    await ctx.reply(
      `Отлично, *${userName.second_name} ${userName.first_name}* сохранён!`,
      { parse_mode: 'Markdown' }
    );
    ctx.scene.leave();
    console.log('registration is over');
  } catch (err) {
    console.log(err);
    ctx.reply(`Что-то пошло не так, упс...Может попробуем заново?`);
    ctx.scene.leave();
  } finally {
    toStart(ctx);
  }
});

// Переписываем
greetingScene.action('rejectGreeting', (ctx) => {
  return ctx.reply(
    `Не распознал сообщение\n\nВведи ФАМИЛИЮ и ИМЯ *текстом*, в 1 строчку\nФамилия и через пробел ИМЯ \nПример:\n*Петров Иван*`,
    { parse_mode: 'MarkdownV2' }
  );
});
function isCorrectInput(ctx) {
  if (
    ctx.updateSubTypes.length > 1 ||
    ctx.updateSubTypes[0] !== 'text' ||
    ctx.update.message.text.split(' ').length !== 2
  )
    return false;
  return true;
}

const parseName = (ctx) => {
  const input = ctx.update.message.text.split(' ');
  return { first_name: input[1], second_name: input[0] };
};

const makeRegisterData = (ctx, userNameObj) => {
  const userObj = { ...ctx.update.callback_query.from };
  userObj.local_name = userNameObj;
  //   console.log(userObj);
  return userObj;
};

module.exports = { greetingScene };
