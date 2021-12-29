const { NotFound } = require('http-errors');
const { User } = require('../models/models');
const { sendResponse } = require('../utils');

const getAll = async (req, res) => {
  const users = await User.findAll();

  if (!users) {
    throw new NotFound('Users not found');
  }

  sendResponse(res, users);
};

module.exports = getAll;
