const Pool = require("pg").Pool;
require("dotenv").config();

const { POSTGRES_PORT, POSTGRES_USERNAME, POSTGRES_PASSWORD, POSTGRES_DATABASE, POSTGRES_HOST, DATABASE_URL } = process.env;

// const pool = new Pool({
//   user: POSTGRES_USERNAME,
//   password: POSTGRES_PASSWORD,
//   host: POSTGRES_HOST,
//   port: POSTGRES_PORT,
//   database: POSTGRES_DATABASE,
// });

const connectionString = `postgresql://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;
const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;
