const { NotFound } = require('http-errors');
const { db } = require('../db');
const { sendResponse } = require('../utils');

const getUsers = async (req, res) => {
  const users = await db.query('SELECT * FROM person');

  if (!users) {
    throw new NotFound('Users not found');
  }

  sendResponse(res, users.rows);
};
module.exports = getUsers;
