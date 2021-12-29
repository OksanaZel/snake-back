const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
} = process.env;

const sequelize = new Sequelize(
  POSTGRES_DATABASE,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  {
    host: POSTGRES_HOST,
    dialect: 'postgres',
    ssl: true,
    protocol: 'postgres',

    logging: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

module.exports = sequelize;
