const { DICT } = require('./dictionary');
const createReport = (text, profession, location) => {
  return `📍 <b>${DICT[location]}</b>
💰 <b>${DICT[profession]}</b>

<blockquote>${text}</blockquote>`;
};

module.exports = { createReport };
