const fs = require('fs').promises;
const { REPORT_ORDER_LIST, DICT } = require('./dictionary');
let REPORT_LIST = [];
async function dailyClearReportList() {
  const DAY_LENGTH = 24 * 60 * 60 * 1000;
  const clearTime = createEnvTime('CLEAR_REPORT_TIME');
  const nowTS = new Date().getTime();
  const timeout = clearTime - nowTS;

  const delay = timeout > 0 ? timeout : DAY_LENGTH + timeout;
  setTimeout(function clearReportList() {
    REPORT_LIST = [];
    setTimeout(clearReportList, DAY_LENGTH);
  }, delay);
}

function createReportBotMessage() {
  let report = [];
  REPORT_ORDER_LIST.forEach((item) => {
    report.push(createProfessionList(item));
  });
  return report.join('\n');
}
// напоминание
// sendNotification();

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
      createReportBotMessage()
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
function createProfessionList(obj) {
  let subReport = new Map();
  obj.location_order.forEach((element) => {
    //VELICAN
    const locationUsers = REPORT_LIST.filter(
      (item) => item.location === element
    ).map((el) => el.second_name);
    subReport.set(element, locationUsers);
  });
  //   console.log(subReport);
  const message = [];
  message.push(DICT[obj.profession] + 'ы\n\n');

  subReport.forEach((userList, location) => {
    const status = userList.length !== 0 ? '✅' : '➖';
    const row = `${status}${DICT[location]} ${
      status == '✅' ? userList.join(',') : ''
    }\n`;
    message.push(row);
  });
  return message.join('');
}

module.exports = { REPORT_LIST, everyDayReport, dailyClearReportList };
