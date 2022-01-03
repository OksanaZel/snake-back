const { NotFound } = require('http-errors');
const { User } = require('../models/models');
const { sendResponse } = require('../utils');

const update = async (req, res) => {
  const { id } = req.params;
  const { score } = req.body;
  const user = await User.update(
    { score },

    {
      where: { id },
      returning: true,
      plain: true,
    },
  );

  // if (!user) {
  //   throw new NotFound(`User with id ${id} not found`);
  // }
  const data = user[1].get();

  sendResponse(res, data);
};

module.exports = update;
