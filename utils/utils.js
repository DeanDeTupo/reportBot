//функция для записи в json
const fs = require('fs').promises;

const DATA_PATH = './data/personalData.json';

async function checkUser(userObj) {
  let response;
  const data = await fs.readFile(DATA_PATH, { encoding: 'utf-8' });

  console.log('запрос в БД');
  const json = JSON.parse(data);

  const userData = isInData(json, userObj);
  // данные уже есть, пользователь зарегистрирован
  if (!!userData) {
    response = {
      status: 'in',
      data: userData,
    };
    return response;
  }
  response = {
    status: 'not',
    data: null,
  };
  return response;
}

async function registerUser(userObj) {
  let response;
  const data = await fs.readFile(DATA_PATH, 'utf-8', (err, data) => {
    // что делать при ошибке чтения
    if (err) return console.log(err);
  });
  const json = JSON.parse(data);
  json.users.push(userObj);
  const finalJson = JSON.stringify(json);
  await fs.writeFile(DATA_PATH, finalJson, (err) => {
    if (err) console.log(err);
    // else
    //   console.log(
    //     `Данные ${userObj.local_name.first_name} ${userObj.local_name.second_name} записаны`
    //   );
  });
}

async function setUserNotification(id, status) {
  const data = await fs.readFile(DATA_PATH, 'utf-8', (err, data) => {
    // что делать при ошибке чтения
    if (err) return console.log(err);
  });
  const json = JSON.parse(data);
  const user = json.users.find((user) => user.id == id);
  if (user.enableNotify === status) {
    return;
  }
  user.enableNotify = status;
  const finalJson = JSON.stringify(json);
  await fs.writeFile(DATA_PATH, finalJson, (err) => {
    if (err) console.log(err);
  });
}

async function getNotificationList() {
  const rawdata = await fs.readFile(DATA_PATH, 'utf-8', (err, data) => {
    if (err) console.log(err);
  });
  const users = JSON.parse(rawdata).users;
  return users.filter((user) => user.enableNotify === true);
}

function isInData(data, value) {
  return data.users.find((elem) => elem.id == value.id);
}

// function date() {
//   let now = new Date();
//   const offset = now.getTimezoneOffset() / 60;
//   let localTime = now.getTime() - offset * 3600 * 1000;
//   console.log(now);
//   console.log(now.getTimezoneOffset() / 60);
//   console.log(new Date(localTime));
//   // console.log(now.getTimezoneOffset() / 60);
// }
// date();

async function checkUserData(ctx) {
  const request = await checkUser(ctx.update.callback_query.from);
  const userData = request.data;
  if (!userData) return false;
  refreshData(userData, ctx);
  return true;
}

function refreshData(DBDate, ctx) {
  ctx.session.local_name = DBDate.local_name;
  ctx.session.id = DBDate.id;
  ctx.session.enableNotify = DBDate.enableNotify || false;
}

module.exports = {
  checkUser,
  registerUser,
  setUserNotification,
  getNotificationList,
  refreshData,
  checkUserData,
};
