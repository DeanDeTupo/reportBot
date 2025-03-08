const fs = require('fs').promises;

const { REPORT_ORDER_LIST, DICT } = require('./dictionary');

const DAILY_REPORT_PATH = './data/dailyReport.json';

async function dailyClearReportList() {
  checkFileExist(DAILY_REPORT_PATH);
  const DAY_LENGTH = 24 * 60 * 60 * 1000;
  const clearTime = createEnvTime('CLEAR_REPORT_TIME');
  const nowTS = new Date().getTime();
  const timeout = clearTime - nowTS;

  const delay = timeout > 0 ? timeout : DAY_LENGTH + timeout;
  setTimeout(async function clearReportList() {
    await initReport();
    console.log('почистил');
    setTimeout(clearReportList, DAY_LENGTH);
  }, delay);
}

async function createReportBotMessage() {
  let date = getCurrentDate() + '\n';
  let report = [];
  const REPORT_LIST = await readReport();

  REPORT_ORDER_LIST.forEach((item) => {
    report.push(createProfessionList(item, REPORT_LIST));
  });
  const result = date.concat(report.join('\n'));
  console.log('отправляею вечерний отчет');
  return result;
}

async function everyDayReport(bot) {
  const nowTS = new Date().getTime();
  // get timestamp  of purpose time today
  const purposeTS = createEnvTime('REPORT_TIME');
  const timeout = purposeTS - nowTS;
  const DAY_LENGTH = 24 * 60 * 60 * 1000;
  const delay = timeout > 0 ? timeout : DAY_LENGTH + timeout;

  setTimeout(async function everyDaySendReport() {
    await bot.telegram.sendMessage(
      process.env.GROUP_ID,
      await createReportBotMessage()
    );
    setTimeout(everyDaySendReport, DAY_LENGTH);
  }, delay);
}

function createEnvTime(env) {
  let reportTime = process.env[env];
  const time = new Date();

  time.setHours(...reportTime.split(':'));
  return time;
}
function createProfessionList(obj, report_list) {
  let subReport = new Map();
  obj.location_order.forEach((element) => {
    //VELICAN
    const locationUsers = report_list
      .filter((item) => item.location === element)
      .map(
        (el) =>
          `${el.local_name.second_name} ${el.local_name.first_name.slice(
            0,
            1
          )}.`
      );
    subReport.set(element, new Set(locationUsers));
  });
  // console.log(subReport);
  const message = [];
  message.push(obj.prefix + DICT[obj.profession] + 'ы\n');

  subReport.forEach((userList, location) => {
    const status = Array.from(userList).length !== 0 ? '✅' : '➖';
    const row = `${status}${DICT[location]} ${
      status == '✅' ? Array.from(userList).join(',') : ''
    }\n`;
    message.push(row);
  });
  return message.join('');
}

function getCurrentDate() {
  let today = new Date();
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let day = String(today.getDate()).padStart(2, '0');
  return ''.concat(day, '.', month);
}
async function initReport(path = DAILY_REPORT_PATH) {
  try {
    await fs.writeFile(path, JSON.stringify(new Array()));
    console.log('вечерний отчёт создан заново');
  } catch (err) {
    console.log('init report err', err);
  }
}
async function updateReport(data, path = DAILY_REPORT_PATH) {
  const input = await fs.readFile(path, 'utf-8');
  const report = JSON.parse(input);
  report.push(data);
  try {
    fs.writeFile(path, JSON.stringify(report));
  } catch (error) {
    console.log('write report err', err);
  }
}
async function readReport(path = DAILY_REPORT_PATH) {
  const data = await fs.readFile(path, 'utf-8');
  return JSON.parse(data);
}
async function checkFileExist(path) {
  try {
    const stats = await fs.stat(path);
    if (stats.isFile()) return console.log('report file exist');
  } catch (err) {
    console.log(err.errno, 'файла отчета нет, создаю');
    await initReport(path);
  }
}

module.exports = {
  everyDayReport,
  dailyClearReportList,
  updateReport,
  createReportBotMessage,
};
