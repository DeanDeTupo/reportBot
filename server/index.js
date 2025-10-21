require('dotenv').config();
const fs = require('fs').promises;
const { getGrafikPathName } = require('../utils/grafikEvent');

const express = require('express');

const cors = require('cors');

const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Предоставляем статику из папки public
app.use(express.static(path.join(__dirname, '../public')));

// Задаем роут для главной страницы Telegram Mini App
app.get('/', (req, res) => {
  // Отправляем на клиента файл index.html
  console.log('GET запрос');

  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// app.get('/:id', async (req, res) => {
//   // Отправляем на клиента файл index.html
//   const reqId = req.params.id;
//   console.log('Requested id: ', reqId);
//   const dataById = await ticketRepo.getById(reqId);
//   console.log('Data from DB: ', dataById);
//   res.send(JSON.stringify(dataById));
//   res.end();
// });

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
  // res.setHeaders(new Map([['Access-Control-Allow-Origin', '*']]));
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
  // console.log(req.body);
  // проверка на существование сотрудника
  const isEmployer = await checkIsEmployerId(reqId);
  if (!isEmployer) {
    console.log(`Отказано в доступе для ID = ${reqId}`);
    res.sendStatus(403);
    return;
  }

  const writeDataToBD = await saveUserGrafik(reqId, req.body);
  if (writeDataToBD) {
    // console.log(За)
    res.sendStatus(200);
    res.end();
  }
});

// app.put('/:id', express.json(), async (req, res) => {
//   // console.log(req);
//   // запрос к БД на изменение данных
//   const editTicketStatus = await ticketRepo.update(
//     req.params.id,
//     req.body.status
//   );
//   console.log(editTicketStatus);
//   res.send('OK');

//   // validate(req.body.data);
// });

// Команда start открывает Web App

// bot.command('start', async (ctx) => {
//   try {
//     // Пытаемся отправить сообщение с кнопкой открытия мини-приложения в Телеграм

//     await ctx.reply('Welcome to our service:', {
//       reply_markup: {
//         inline_keyboard: [
//           [
//             {
//               text: 'Показать QR-код билета',
//               callback_data: 'send_qr',
//             },
//             {
//               text: 'Сканировать билет',
//               web_app: { url: process.env.WEBHOOK_DOMAIN },
//             },
//           ],
//         ],
//       },
//     });

//     // Обрабатываем ошибку и отправляем уведомление пользователю
//   } catch (error) {
//     console.error('Error opening web app:', error);

//     ctx.reply('Sorry, something went wrong.');
//   }
// });

// Добавляем альтернативную команду — /webapp (аналог /start)

// bot.command('webapp', async (ctx) => {
//   try {
//     await ctx.reply('Open our web app:', {
//       reply_markup: {
//         inline_keyboard: [
//           [
//             {
//               text: 'Open Web App',
//               web_app: { url: process.env.WEBHOOK_DOMAIN },
//             },
//           ],
//         ],
//       },
//     });
//   } catch (error) {
//     console.error('Error sending web app button:', error);

//     ctx.reply('Sorry, something went wrong.');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);

//   console.log(
//     `Web app available at: ${
//       process.env.WEBHOOK_DOMAIN || `http://127.0.0.1:${PORT}`
//     }`
//   );
// });

// -----------------------------------------------------------------

const GRAFIK_DB_PATH = path.resolve(__dirname, '.././', getGrafikPathName());
const PERSONAL_DATA_DB_PATH = path.resolve(
  __dirname,
  '.././',
  'data/personalData.json'
);

// console.log(path.resolve(__dirname, '.././', 'data/personalData.json'));
async function getUserGrafikData(reqId, employerName) {
  try {
    const DBdata = await readJSON(GRAFIK_DB_PATH);

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
    // console.log(userGrafikData);
    return userGrafikData;
  } catch (err) {
    console.log('ERROR GetGrafikData');
    console.log(err);
    return { calendar: null };
  }
}

async function saveUserGrafik(id, dataObj) {
  try {
    const BDData = await readJSON(GRAFIK_DB_PATH);
    const users = BDData.users;
    const idx = users.findIndex((user) => user.id == id);
    if (idx === -1) {
      users.push({ id: +id, ...dataObj });
    } else {
      Object.assign(users[idx], dataObj);
    }

    fs.writeFile(GRAFIK_DB_PATH, JSON.stringify(BDData));

    return true;
  } catch (err) {
    console.log('Ошибка записи графика: ', err);
    return false;
  }
}

// async function checkEmployerId(id) {
//   const usersObj = await readJSON(PERSONAL_DATA_DB_PATH);
//   const idx = usersObj.users.findIndex((user) => user.id == id);
//   return idx < 0 ? false : true;
// }
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
