const { Markup } = require('telegraf');

const mainMenu = {
  inline_keyboard: [[{ text: 'Написать отчёт', callback_data: 'report' }]],
};

const greeting = {
  inline_keyboard: [
    [{ text: 'Давай запомним меня', callback_data: 'greeting' }],
  ],
};

const applyGreeting = {
  inline_keyboard: [
    [{ text: 'Всё верно', callback_data: 'acceptGreeting' }],
    [{ text: 'Изменить', callback_data: 'rejectGreeting' }],
  ],
};

const backToLocation = {
  inline_keyboard: [[{ text: 'Назад🔙', callback_data: 'to_location' }]],
};

const setProfession = {
  inline_keyboard: [
    [{ text: 'Кассир💰', callback_data: 'profession_kassir' }],
    [{ text: 'Фотограф📷', callback_data: 'profession_fotographer' }],
    [{ text: 'выход❌', callback_data: 'to_menu' }],
  ],
};

const setKassaLocation = {
  inline_keyboard: [
    [
      { text: 'Р11️⃣', callback_data: 'loc_R1' },
      { text: 'Р22️⃣', callback_data: 'loc_R2' },
      { text: 'Р33️⃣', callback_data: 'loc_R3' },
    ],
    [
      { text: 'Р44️⃣', callback_data: 'loc_R4' },
      { text: 'МК🔁', callback_data: 'loc_MK' },
    ],
    [{ text: 'Зу-Зу🐰', callback_data: 'loc_ZUZU' }],
    [
      { text: 'Н3☠️', callback_data: 'loc_N3' },
      { text: 'Н5🙃', callback_data: 'loc_N5' },
    ],
    [
      { text: 'МКР🔃', callback_data: 'loc_MKR' },
      { text: 'МКН🔃', callback_data: 'loc_MKN' },
    ],
    [{ text: 'Фрейд🍡', callback_data: 'loc_FREUD' }],
    [{ text: 'Кафе🥐', callback_data: 'loc_CAFE' }],

    [{ text: 'назад🔙', callback_data: 'to_profession' }],
  ],
};

const setPhotoLocation = {
  inline_keyboard: [
    [{ text: 'БМФ🔁', callback_data: 'loc_BMF' }],
    [{ text: 'Муви🎦', callback_data: 'loc_MOVIE' }],
    [{ text: 'Космос🚀', callback_data: 'loc_KOSMOS' }],
    [{ text: 'Фрейд🍓', callback_data: 'loc_FREUD' }],
    [{ text: 'ДВД🙃', callback_data: 'loc_DVD' }],
    [{ text: 'Побег⛓️', callback_data: 'loc_POBEG' }],
    [{ text: 'Стекло🧊', callback_data: 'loc_STEKLO' }],
    [{ text: 'Иллюзии🖼', callback_data: 'loc_ILLUSIONS' }],
    [{ text: 'Великан☎️', callback_data: 'loc_VELICAN' }],
    [{ text: 'Страх☠️', callback_data: 'loc_STRAH' }],
    [{ text: 'назад🔙', callback_data: 'to_profession' }],
  ],
};

const preConfirm = {
  inline_keyboard: [
    [{ text: 'Всё верно✅', callback_data: 'preConfirmed' }],
    [{ text: 'Назад🔙', callback_data: 'to_location' }],
  ],
};

const confirmReport = {
  inline_keyboard: [
    [{ text: 'Да, всё ок✅', callback_data: 'report_ok' }],
    [{ text: 'Нет🔙', callback_data: 'to_location' }],
  ],
};
module.exports = {
  mainMenu,
  setProfession,
  setKassaLocation,
  setPhotoLocation,
  preConfirm,
  confirmReport,
  greeting,
  applyGreeting,
  backToLocation,
};
