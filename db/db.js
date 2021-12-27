const Pool = require("pg").Pool;

const { DB_PORT, DB_USER_NAME, DB_PASSWORD } = process.env;

const pool = new Pool({
  user: DB_USER_NAME,
  password: DB_PASSWORD,
  host: "localhost",
  port: DB_PORT,
  database: "user_list",
});

module.exports = pool;
