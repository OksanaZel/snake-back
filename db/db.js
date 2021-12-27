const Pool = require("pg").Pool;

const { POSTGRES_PORT, POSTGRES_USERNAME, POSTGRES_PASSWORD, POSTGRES_DATABASE, POSTGRES_HOST } = process.env;

const pool = new Pool({
  user: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  database: POSTGRES_DATABASE,
});

module.exports = pool;
