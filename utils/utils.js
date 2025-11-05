const { Telegram } = require('telegraf');

//функция для записи в json
const fs = require('fs').promises;

const PERSONAL_DATA_PATH = './data/personalData.json';
const NICKNAMES_DATA_PATH = './data/nicknamesData.json';
const NICKNAMES_SOURCE_PATH = './data/nicknameSource.json';

async function checkUser(userObj) {
  const data = await fs.readFile(PERSONAL_DATA_PATH, { encoding: 'utf-8' });

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
  let userData;
  try {
    const data = await fs.readFile(PERSONAL_DATA_PATH, 'utf-8');
    const json = JSON.parse(data);
    json.users.push(userObj);
    userData = JSON.stringify(json, null, 1);
  } catch (err) {
    // что делать при ошибке чтения
    console.log('ошибка чтения', err);
  }
  try {
    await fs.writeFile(PERSONAL_DATA_PATH, userData);
  } catch (err) {
    // что делать при ошибке записи
    console.log('ошибка записи', err);
  }
}

async function setUserNotification(id, status) {
  const data = await fs.readFile(PERSONAL_DATA_PATH, 'utf-8', (err, data) => {
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
  await fs.writeFile(PERSONAL_DATA_PATH, finalJson, (err) => {
    if (err) console.log(err);
  });
}

async function getNotificationList() {
  const rawdata = await fs.readFile(
    PERSONAL_DATA_PATH,
    'utf-8',
    (err, data) => {
      if (err) console.log(err);
    }
  );
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
    // console.log('11111', chatMember);
    return AdminStatuses.indexOf(chatMember.status) == -1 ? false : true;
  } catch (err) {
    console.log('pizdaaa', err);
    return false;
  }
}

async function setUserProperty(userId, prop, value) {
  try {
    const stringData = await fs.readFile(PERSONAL_DATA_PATH, {
      encoding: 'utf-8',
    });
    const data = JSON.parse(stringData);
    data.users.find((user) => {
      if (user.id == userId) {
        user[prop] = value;
        return true;
      }
    });
    await fs.writeFile(PERSONAL_DATA_PATH, JSON.stringify(data));
    return true;
  } catch (err) {
    console.log('Pizda', err);
    return false;
  }
}

async function getUserList() {
  const file = await fs.readFile(PERSONAL_DATA_PATH, { encoding: 'utf-8' });
  const data = JSON.parse(file);
  return data.users;
}

async function getUsersForAnonimMessage() {
  const userList = await getUserList();
  const allowedUsers = userList;

  return allowedUsers;
}

async function getUserById(userID) {
  const usersList = await getUserList();
  const targetUser = usersList.find((elem) => {
    return elem.id == userID;
  });

  return targetUser;
}

async function initNicknames() {
  try {
    await fs.readFile(NICKNAMES_DATA_PATH);
    console.log('nickNames exist');
  } catch {
    const data = JSON.stringify(new Array());
    try {
      await fs.writeFile(NICKNAMES_DATA_PATH, data, 'utf-8');
      console.log('nickNames created');
    } catch {
      console.log('Error! nickNames does not exists, cant create');
    }
  }
}

async function readNicknames() {
  const data = await fs.readFile(NICKNAMES_DATA_PATH);
  return JSON.parse(data);
}

async function generateNickname() {
  try {
    const data = await fs.readFile(NICKNAMES_SOURCE_PATH, 'utf-8');
    source = JSON.parse(data);
    //случайно выбрать элемент из списка
    return (
      selectRandomArrayElement(source.first) +
      ' ' +
      selectRandomArrayElement(source.second)
    );
  } catch (e) {
    console.log('cant read nicknameSource data');
    return false;
  }
}

function selectRandomArrayElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

async function getNickname(id) {
  const anonUsers = await readNicknames();
  const user = anonUsers.find((user) => user.id === id);
  if (!user) {
    const nickname = await registerNickname(id, anonUsers);
    return nickname;
  }
  return user.nickname;
}
async function registerNickname(id, list) {
  let nickname = await createNickname(id, list);
  list.push({ id, nickname });
  await fs.writeFile(NICKNAMES_DATA_PATH, JSON.stringify(list));
  return nickname;
}

// уязвимость с количеством имён
// при достижении максимума - бесконечная рекурсия
async function createNickname(id, list) {
  let nickname = await generateNickname();
  if (!list.find((user) => user.nickname == nickname)) return nickname;
  else return createNickname(id, list);
}

module.exports = {
  checkUser,
  registerUser,
  setUserNotification,
  getNotificationList,
  refreshData,
  checkUserData,
  isAdmin,
  getUserList,
  getUsersForAnonimMessage,
  getUserById,
  initNicknames,
  generateNickname,
  getNickname,
  createNickname,
};
