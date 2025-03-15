const { Telegram } = require('telegraf');

//функция для записи в json
const fs = require('fs').promises;

const DATA_PATH = './data/personalData.json';

async function checkUser(userObj) {
  const data = await fs.readFile(DATA_PATH, { encoding: 'utf-8' });

  console.log('запрос в БД');
  const json = JSON.parse(data);

  const userData = json.users.find((elem) => elem.id == userObj.id);
  // данные уже есть, пользователь зарегистрирован
  if (!userData) {
    return null;
  }
  return userData;
}

async function registerUser(userObj) {
  let response;
  try {
    const data = await fs.readFile(DATA_PATH, 'utf-8');
  } catch (err) {
    // что делать при ошибке чтения
    console.log(err);
  }

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

async function checkUserData(ctx) {
  const userId =
    (!!ctx.update.message ? ctx.update.message.from : undefined) ||
    ctx.update.callback_query.from;
  const request = await checkUser(userId);
  // const userData = request.data;
  if (!request) return false;
  await refreshData(request, ctx);
  return true;
}

async function refreshData(DBDate, ctx) {
  // console.log(DBDate);
  let adminStatus = false;
  try {
    adminStatus = await isAdmin(DBDate.id, process.env.GROUP_ID, ctx);
    DBDate.isAdmin = adminStatus;
    await setUserProperty(DBDate.id, 'isAdmin', adminStatus);
  } catch (err) {
    console.log('Pizda', err);
  }
  if (!DBDate.hasOwnProperty('isAdmin')) {
  }
  ctx.session.local_name = DBDate.local_name;
  ctx.session.id = DBDate.id;
  ctx.session.enableNotify = DBDate.enableNotify || false;
  ctx.session.isAdmin = DBDate.isAdmin;
}

async function isAdmin(userId, chatId, ctx) {
  const AdminStatuses = ['creator', 'administrator', 'member'];
  try {
    let chatMember = await ctx.telegram.getChatMember(chatId, userId);
    console.log('11111', chatMember);
    return AdminStatuses.indexOf(chatMember.status) == -1 ? false : true;
  } catch (err) {
    console.log('pizdaaa', err);
    return false;
  }
}

async function setUserProperty(userId, prop, value) {
  try {
    const stringData = await fs.readFile(DATA_PATH, { encoding: 'utf-8' });
    const data = JSON.parse(stringData);
    data.users.find((user) => {
      if (user.id == userId) {
        user[prop] = value;
        return true;
      }
    });
    await fs.writeFile(DATA_PATH, JSON.stringify(data));
    return true;
  } catch (err) {
    console.log('Pizda', err);
    return false;
  }
}

module.exports = {
  checkUser,
  registerUser,
  setUserNotification,
  getNotificationList,
  refreshData,
  checkUserData,
  isAdmin,
};
