const { NotFound } = require('http-errors');
const { User } = require('../models/models');
const { sendResponse } = require('../utils');

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });

  if (!user) {
    throw new NotFound(`User with id ${id} not found`);
  }

  sendResponse(res, user);
};

module.exports = getById;
