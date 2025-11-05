const { getNotificationList } = require('./utils');

async function sendNotification(bot) {
  const usersToNotify = await getNotificationList();

  const notifyInterval = setInterval(() => {
    if (usersToNotify.length === 0) {
      return clearInterval(notifyInterval);
    }
    const user = usersToNotify.pop();
    console.log(
      'отправялем напоминание для ',
      user.local_name.second_name,
      user.local_name.first_name
    );
    bot.telegram.sendMessage(
      user.id,
      `${user.local_name.first_name}, пора написать отчёт\nЖми /start`,
      { parse_mode: 'Markdown' }
    );
  }, 1000);
}

function createEnvTime(env) {
  let reportTime = process.env[env];
  const time = new Date();
  time.setHours(...reportTime.split(':'));
  return time;
}

async function startUsersNotification(bot) {
  const purposeTS = createEnvTime('NOTIFICATION_TIME');

  const nowTS = new Date().getTime();
  const timeout = purposeTS - nowTS;
  const DAY_LENGTH = 24 * 60 * 60 * 1000;
  const delay = timeout > 0 ? timeout : DAY_LENGTH + timeout;
  setTimeout(async function everyDayNotify() {
    await sendNotification(bot);
    setTimeout(everyDayNotify, DAY_LENGTH);
  }, delay);
}

module.exports = { startUsersNotification };
