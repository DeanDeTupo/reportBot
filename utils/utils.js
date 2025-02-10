//функция для записи в json
const fs = require('node:fs').promises;

const dataPath = './data/personalData.json';

async function checkUser(userObj) {
  console.log(userObj);
  let response;
  const data = await fs.readFile(dataPath, { encoding: 'utf-8' });
  //   const data = await fs.readFile(dataPath, 'utf-8', (err, data) => {
  //     // что делать при ошибке чтения
  //     if (err) return console.log(err);
  //     console.log(`прочитал: ${data}`);
  //   });
  console.log(data);
  const json = JSON.parse(data);

  const user = isInData(json, userObj);
  // данные уже есть, пользователь зарегистрирован
  if (!!user) {
    response = {
      status: 'in',
      data: user,
    };
    console.log(response);
    return response;
  }
  response = {
    status: 'not',
    data: null,
  };
  console.log('функция checkuser выполнена');
  return response;
}

async function registerUser(userObj) {
  console.log(userObj);
  let response;
  const data = await fs.readFile(dataPath, 'utf-8', (err, data) => {
    // что делать при ошибке чтения
    if (err) return console.log(err);
    console.log(`прочитал: ${data}`);
  });
  const json = JSON.parse(data);
  console.log(json.users);
  json.users.push(userObj);
  console.log(json.users);
  const finalJson = JSON.stringify(json);
  await fs.writeFile(dataPath, finalJson, (err) => {
    if (err) console.log(err);
    else
      console.log(
        `Данные ${userObj.local_name.first_name} ${userObj.local_name.second_name} записаны`
      );
  });
}

function isInData(data, value) {
  return data.users.find((elem) => elem.id == value.id);
}

module.exports = { checkUser, registerUser };
