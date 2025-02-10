require('dotenv').config();
const { BaseScene, session } = require('telegraf');
const { greeting, applyGreeting } = require('../utils/buttons');

const greetingScene = new BaseScene('greeting');
const { backMenu, start } = require('../commands');
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
  if (!isCorrectInput(ctx)) {
    return ctx.reply(
      `Не распознал сообщение\n\nВведи ФАМИЛИЮ и ИМЯ *текстом*, в 1 строчку\nФамилия и через пробел ИМЯ \nПример:\n*Петров Иван*`,
      { parse_mode: 'MarkdownV2' }
    );
  }
  const userInput = parseName(ctx);
  ctx.session.userName = userInput;

  ctx.reply(
    `Фамилия: *${userInput.second_name}*\nИмя: *${userInput.first_name}*?\nэти данные видеть офис, вымышленные данные запрещены и караются штрафом! В дальнейшем изменить его будет нельзя\nОставляем?`,
    { parse_mode: 'Markdown', reply_markup: applyGreeting }
  );
});

// ОК, Регистрируем
greetingScene.action('acceptGreeting', async (ctx) => {
  //   console.log(ctx.update.callback_query.from);
  //   console.log(ctx.session.userName);
  const userName = ctx.session.userName;
  ctx.reply(
    `Отлично, *${userName.second_name} ${userName.first_name}* сохранён!`
  );
  const registerData = makeRegisterData(ctx, ctx.session.userName);
  ctx.scene.leave();
  console.log(
    `${userName.second_name} ${userName.first_name} вышел из сценария`
  );
  await registerUser(registerData);
  return start;
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
