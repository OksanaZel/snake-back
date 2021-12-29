const { NotFound } = require('http-errors');
const { User } = require('../models/models');
const { sendResponse } = require('../utils');

const update = async (req, res) => {
  const { id } = req.params;
  const { score } = req.body;
  const [user] = await User.update({ score }, { where: { id } });

  if (!user) {
    throw new NotFound(`User with id ${id} not found`);
  }

  sendResponse(res, { message: 'Successfuly updated' });
};

module.exports = update;
