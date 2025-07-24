require('dotenv').config();
const { DICT } = require('./dictionary');

const dict = { '<': '&lt;', '>': '&gt;', '&': '&amp;' };
const htmlParser = (text) => {
  return text.replace(/\<|\>|\&/g, (match) => dict[match]);
};
const createReport = (text, profession, location, nameObj) => {
  const pastedText = !!text ? htmlParser(text) : '';
  return `📍 <b>${DICT[location]}</b>
💰 <b>${DICT[profession]}</b>: ${nameObj.second_name} ${nameObj.first_name}

${!!pastedText ? `<blockquote>${pastedText}</blockquote>` : ''}`;
};

const textLengthWarning = (text) => {
  return `<b>Слишком длинный текст!</b> Такое отправлять не буду
  Сократи его хотябы на <b>${
    text.length - 1024
  }</b> символов и отправь отчет заново`;
};

function notifyStatusMessage(status) {
  const NOTE_TIME = process.env.TIME.slice(0, 5);
  console.log(NOTE_TIME);
  return `Напоминания *${
    status ? 'ВКЛЮЧЕНЫ' : 'ВЫКЛЮЧЕНЫ'
  }*\nБуду напоминать тебе про отчет в *${NOTE_TIME}*\n\nИзменения вступят в силу после нажатия кнопки _сохранить и выйти_`;
}

module.exports = { createReport, notifyStatusMessage, textLengthWarning };
