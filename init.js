const { everyDayReport } = require('./utils/events');
const { startUsersNotification } = require('./utils/userNotification');

const { messageSenderService } = require('./scenes/anonimusScene');
const { initNicknames, generateNickname } = require('./utils/utils');
const { createGrafikList } = require('./utils/grafikEvent');

function allSystemsStart(bot) {
  everyDayReport(bot);
  startUsersNotification(bot);
  messageSenderService(bot);
  initNicknames();
  generateNickname();
  createGrafikList();
}

module.exports = { allSystemsStart };
