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
  return `Слишком длинный текст!
  Сократи его хотябы на <b>${text.length - 1024}</b> символов и отправь заново`;
};

module.exports = { createReport, textLengthWarning };
