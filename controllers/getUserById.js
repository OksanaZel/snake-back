const { NotFound } = require('http-errors');
const { db } = require('../db');
const { sendResponse } = require('../utils');

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await db.query('SELECT * FROM person where id = $1', [id]);
  if (user.rows.length === 0) {
    throw new NotFound('User not found');
  }
  // res.json(user.rows[0]);
  sendResponse(res, user.rows[0]);
};

module.exports = getUserById;
