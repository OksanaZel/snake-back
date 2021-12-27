const { BadRequest } = require('http-errors');
const { db } = require('../db');
const { sendResponse } = require('../utils');

const createUser = async (req, res) => {
  const { name, score } = req.body;

  if (!name) {
    throw new BadRequest('Please enter your name');
  }

  const newPerson = await db.query(
    'INSERT INTO person(name, score) values ($1, $2) RETURNING *',
    [name, score],
  );

  sendResponse(res, newPerson.rows[0], 201);
};

module.exports = createUser;
