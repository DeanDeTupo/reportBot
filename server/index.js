require('dotenv').config();
const fs = require('fs').promises;
// const { getGrafikPathName } = require('../utils/grafikEvent');

const express = require('express');

const cors = require('cors');

const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Предоставляем статику из папки public
app.use('/grafik', express.static(path.join(__dirname, '../public')));

// Задаем роут для главной страницы Telegram Mini App
app.get('/grafik', (req, res) => {
  // Отправляем на клиента файл index.html
  console.log('GET запрос');

  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/grafik/:id', async (req, res) => {
  // Отправляем на клиента файл index.html
  const reqId = req.params.id;
  console.log('Requested grafik by id: ', reqId);
  // проверка на существование сотрудника
  const employer = await checkIsEmployerId(reqId);
  if (!employer) {
    console.log(`Отказано в доступе для ID = ${reqId}`);
    res.sendStatus(403);
    return;
  }
  const userGrafikData = await getUserGrafikData(reqId, employer);
  console.log('В ГРАФИК зашёл :', parseName(employer));
  res.send(JSON.stringify(userGrafikData));
  res.end();
});

function parseName(local_name_obj) {
  return local_name_obj.second_name + ' ' + local_name_obj.first_name;
}

app.post('/grafik/:id', express.json(), async (req, res) => {
  // Отправляем на клиента файл index.html
  const reqId = req.params.id;
  console.log('Received grafik from id: ', reqId);
  // проверка на существование сотрудника
  const isEmployer = await checkIsEmployerId(reqId);
  if (!isEmployer) {
    console.log(`Отказано в доступе для ID = ${reqId}`);
    res.sendStatus(403);
    return;
  }

  const writeDataToBD = await saveUserGrafik(reqId, req.body);
  if (writeDataToBD) {
    res.sendStatus(200);
    res.end();
  }
});

// const getGrafikAbsPath = () => {
//   return path.resolve(__dirname, '.././', getGrafikPathName());
// };
const PERSONAL_DATA_DB_PATH = path.resolve(
  __dirname,
  '.././',
  'data/personalData.json'
);

async function getUserGrafikData(reqId, employerName) {
  try {
    const DBdata = await readJSON(global.GRAFIK_PATH);

    const calendarSchema = DBdata.calendar;
    let userData = DBdata.users.find((item) => {
      return +item.id === +reqId;
    });
    console.log('Нашел в базе: ');
    if (!userData) {
      userData = {
        id: +reqId,
        dayOff: [],
        details: '',
        local_name: employerName,
      };
    }

    const userGrafikData = {
      calendar: calendarSchema,
      userGrafikData: Object.assign(userData, { local_name: employerName }),
    };
    return userGrafikData;
  } catch (err) {
    console.log('ERROR GetGrafikData');
    console.log(err);
    return { calendar: null };
  }
}

async function saveUserGrafik(id, dataObj) {
  try {
    const BDData = await readJSON(global.GRAFIK_PATH);
    const users = BDData.users;
    const idx = users.findIndex((user) => user.id == id);
    if (idx === -1) {
      users.push({ id: +id, ...dataObj });
    } else {
      Object.assign(users[idx], dataObj);
    }

    fs.writeFile(global.GRAFIK_PATH, JSON.stringify(BDData, null, 0));

    return true;
  } catch (err) {
    console.log('Ошибка записи графика: ', err);
    return false;
  }
}

async function checkIsEmployerId(id) {
  const usersObj = await readJSON(PERSONAL_DATA_DB_PATH);
  const usr = usersObj.users.find((user) => user.id == id);
  if (!usr) return false;
  else return usr.local_name;
}

async function readJSON(path) {
  const readDataFromJSON = await fs.readFile(path, {
    encoding: 'utf-8',
  });

  return JSON.parse(readDataFromJSON);
}

module.exports = { server: app };
