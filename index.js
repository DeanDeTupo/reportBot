const { setupBot } = require('./bot');
const { allSystemsStart } = require('./init');
const { server } = require('./server/index');
require('dotenv').config();

const PORT = process.env.PORT;

(async function () {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    const bot = setupBot();
    await bot.launch();
    allSystemsStart(bot);
  } catch (error) {
    console.log('Ошибка запуска Приложения: ', error);
  }
})();
