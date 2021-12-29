const { NotFound } = require('http-errors');
const { User } = require('../models/models');
const { sendResponse } = require('../utils');

const deleteById = async (req, res) => {
  const { id } = req.params;
  const user = await User.destroy({ where: { id } });

  if (!user) {
    throw new NotFound(`User with id ${id} not found`);
  }

  sendResponse(res, { message: 'Successfuly removed' });
};

module.exports = deleteById;
