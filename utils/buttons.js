const { Markup } = require('telegraf');

const mainMenu = {
  inline_keyboard: [
    [{ text: 'Написать отчёт', callback_data: 'report' }],
    [{ text: 'Напоминания', callback_data: 'notify' }],
  ],
};
const notify = (status) => {
  const state = status || false;
  const checker = '✔️';
  return {
    inline_keyboard: [
      [
        {
          text: `${state ? checker : ' '}Напоминать об отчёте`,
          callback_data: 'notifyToggle',
        },
      ],
      [{ text: 'сохранить и выйти', callback_data: 'exit_notify' }],
    ],
  };
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
      { text: 'МКР🔁', callback_data: 'loc_MKR' },
    ],
    [{ text: 'Зу-Зу🐰', callback_data: 'loc_ZUZU' }],
    [
      { text: 'Н3☠️', callback_data: 'loc_N3' },
      { text: 'Н5🙃', callback_data: 'loc_N5' },
    ],
    [{ text: 'МКН🔃', callback_data: 'loc_MKN' }],
    [{ text: 'Фрейд🍡', callback_data: 'loc_FREUD' }],
    [{ text: 'Кафе🥐', callback_data: 'loc_CAFE' }],

    [{ text: 'назад🔙', callback_data: 'to_profession' }],
  ],
};

const setPhotoLocation = {
  inline_keyboard: [
    [{ text: 'Страх☠️', callback_data: 'loc_STRAH' }],
    [{ text: 'Великан☎️', callback_data: 'loc_VELICAN' }],
    [{ text: 'ДВД🙃', callback_data: 'loc_DVD' }],
    [{ text: 'Побег⛓️', callback_data: 'loc_POBEG' }],
    [{ text: 'Космос🚀', callback_data: 'loc_KOSMOS' }],
    [{ text: 'Иллюзии🖼', callback_data: 'loc_ILLUSIONS' }],
    [{ text: 'Стекло🧊', callback_data: 'loc_STEKLO' }],
    [{ text: 'Фрейд🍓', callback_data: 'loc_FREUD' }],
    [{ text: 'Муви🎦', callback_data: 'loc_MOVIE' }],
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
  notify,
};
