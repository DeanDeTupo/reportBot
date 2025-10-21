const fs = require('fs').promises;

const GRAFIK_PATH = './data/grafik.json';

// запускать и очищать график раз в 2 недели
/**
 * берем сейчас и создаём график, создаём файл с данными, затем вычисляем следующий график, и на setTimeout запускаем то же самое
 */

async function createGrafikList() {
  // //это функция делает создание графика каждые 2 недели
  const currentGrafikPathName = getGrafikPathName();
  await checkGrafikList(currentGrafikPathName);

  // высчитываем через сколько надо будет создать новый график
  const delay = grafikDelay();
  // console.log(delay);

  setTimeout(createGrafikList, delay);
  console.log(
    'новый график создастся через',
    Math.floor(delay / 3600000 / 24),
    'дней',
    Math.floor(
      (delay - Math.floor(delay / 3600000 / 24) * 24 * 3600000) / 3600000
    ),
    'часов'
  );
}
// createGrafikList();

function grafikDelay() {
  // находим первый день следующего графика
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  let startDate;
  if (currentDate.getDate() < 15) {
    startDate = new Date(currentYear, currentMonth, 15);
  } else {
    currentMonth++;
    startDate = new Date(currentYear, currentMonth, 1);
  }
  return startDate - currentDate;
}

function getGrafikPathName() {
  // находим первый день следующего графика
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  let startDate;
  if (currentDate.getDate() < 15) {
    startDate = new Date(currentYear, currentMonth, 15);
  } else {
    //выдаст ошибку в 2 половине декабря, ибо оставит текущий год
    currentMonth++;
    startDate = new Date(currentYear, currentMonth, 1);
  }

  // проверяем какое текущее имя должно быть у графика сейчас
  let halfMonth = currentDate.getDate() < 15 ? '.2pol.' : '.1pol.';
  return (
    './data/grafik' +
    halfMonth +
    `${startDate.getMonth() + 1}.${startDate.getFullYear()}` +
    '.json'
  );
}

function createCalendar() {
  // обрабатываем текущую дату
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  let startDate;
  let endDate;
  // задаём дни для графика
  if (currentDate.getDate() < 15) {
    startDate = new Date(
      currentYear,
      currentMonth,
      15,
      -(currentDate.getTimezoneOffset() / 60),
      0,
      0,
      0
    );
    endDate = new Date(
      currentYear,
      currentMonth,
      getLastDayOfMonth(currentDate),
      -(currentDate.getTimezoneOffset() / 60),
      0,
      0,
      0
    );
  } else {
    currentMonth++;
    startDate = new Date(
      currentYear,
      currentMonth,
      1,
      -(currentDate.getTimezoneOffset() / 60),
      0,
      0,
      0
    );
    endDate = new Date(
      currentYear,
      currentMonth,
      15,
      -(currentDate.getTimezoneOffset() / 60),
      0,
      0,
      0
    );
  }

  // день недели, с которого начинается рабочий график
  let startDayWeekNumber = startDate.getDay();
  startDayWeekNumber = startDayWeekNumber == 0 ? 7 : startDayWeekNumber;

  // день недели, с которым заканчивается рабочий график
  let endDayWeekNumber = startDate.getDay();
  endDayWeekNumber = endDayWeekNumber == 0 ? 7 : endDayWeekNumber;
  // день, с которого начнётся построение календаря
  const firstGrafikDay = startDate.getDate() - (startDayWeekNumber - 1);
  const lastGrafikDay = endDate.getDate() + (7 - endDayWeekNumber);
  const weeksCount = Math.floor((lastGrafikDay - firstGrafikDay + 1) / 7);
  // console.log('weeks count', weeksCount);
  let calendar = [];
  let start = firstGrafikDay;
  for (let week = 0; week < weeksCount; week++) {
    calendar[week] = [];
    for (let day = 0; day < 7; day++) {
      if (start < startDate.getDate() || start > endDate.getDate()) {
        calendar[week][day] = { value: '' };
      } else {
        calendar[week][day] = { value: start, isWorking: true };
      }
      start++;
    }
  }
  //
  return {
    calendar: {
      schema: calendar,
      info: {
        startDate: startDate.getDate(),
        endDate: endDate.getDate(),
        month: startDate.getMonth() + 1,
      },
    },
  };
}

// date();
function getLastDayOfMonth(date) {
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();
  let offset = date.getTimezoneOffset();
  let res = new Date(new Date(currentYear, currentMonth, 1, -offset / 60) - 2);
  return res.getUTCDate();
}

//создание графика при запуске
async function checkGrafikList(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    if (!!data) console.log('график есть');
    return true;
  } catch {
    console.log('графика нет, создаём');
    return await initGrafikList(path);
  }
}

// ???????схему поменять
async function initGrafikList(path) {
  try {
    // структура объекта другая
    const grafikObj = {
      ...createCalendar(),
      users: new Array(),
    };

    await fs.writeFile(path, JSON.stringify(grafikObj));
    return true;
  } catch {
    console.log('не удалось создать график');
    return false;
  }
}

async function readJSON(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}

async function readGrafikList() {
  try {
    const path = getGrafikPathName();
    return await readJSON(path);
  } catch {
    console.log('ошибка получения графика', err);
    return false;
  }
}

async function getUserGrafikById(grafik, id) {
  try {
    // console.log(grafik);

    const userGrafik = grafik.users.find((user) => user.id === id);
    if (!userGrafik) return [grafik.calendar, null];
    return [userGrafik.grafik, userGrafik.suggestions];
  } catch (err) {
    console.log('pizda', err);
    return;
  }
}
async function writeGrafikList(newGrafik) {
  try {
    await fs.writeFile(getGrafikPathName(), JSON.stringify(newGrafik));
  } catch (err) {
    console.log('Pizda', err);
  }
}
module.exports = {
  getGrafikPathName,
  createGrafikList,
  getUserGrafikById,
  readGrafikList,
  writeGrafikList,
};
