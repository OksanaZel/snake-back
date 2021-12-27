const { NotFound } = require('http-errors');
const { db } = require('../db');
const { sendResponse } = require('../utils');

const updateUserScore = async (req, res) => {
  const id = req.params.id;
  const { score } = req.body;
  const user = await db.query(
    'UPDATE person set score = $1 where id = $2 RETURNING *',
    [score, id],
  );

  if (user.rows.length === 0) {
    throw new NotFound('User not found');
  }

  sendResponse(res, user.rows[0]);
};

module.exports = updateUserScore;
