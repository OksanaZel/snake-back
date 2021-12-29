const { BadRequest } = require('http-errors');
const { User } = require('../models/models');
const { sendResponse } = require('../utils');

const create = async (req, res) => {
  const { name, score } = req.body;

  if (!name) {
    throw new BadRequest('Please enter your name');
  }

  const user = await User.create({ name, score });

  sendResponse(res, { user }, 201);
};

module.exports = create;
