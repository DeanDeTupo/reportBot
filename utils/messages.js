const { DICT } = require('./dictionary');
const createReport = (text, profession, location, nameObj) => {
  return `📍 <b>${DICT[location]}</b>
💰 <b>${DICT[profession]}</b>: ${nameObj.second_name} ${nameObj.first_name}

${!!text ? `<blockquote>${text}</blockquote>` : ''}`;
};

const textLengthWarning = (text) => {
  return `Слишком длинный текст!
  Сократи его хотябы на <b>${text.length - 1024}</b> символов и отправь заново`;
};

module.exports = { createReport, textLengthWarning };
