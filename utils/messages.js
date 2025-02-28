const { DICT } = require('./dictionary');
const createReport = (text, profession, location, nameObj) => {
  console.log(nameObj);
  return `📍 <b>${DICT[location]}</b>
💰 <b>${DICT[profession]}</b>: ${nameObj.second_name} ${nameObj.first_name}

${!!text ? `<blockquote>${text}</blockquote>` : ''}`;
};

function notifyStatusMessage(status) {
  return `Напоминания *${
    status ? 'ВКЛЮЧЕНЫ' : 'ВЫКЛЮЧЕНЫ'
  }*\nИзменения вступят в силу после нажатия кнопки _сохранить и выйти_`;
}

module.exports = { createReport, notifyStatusMessage };
