const app = require('../app');
const { sequelize } = require('../db');

const { PORT = 4000 } = process.env;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

module.exports = sequelize;
