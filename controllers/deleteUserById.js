const { db } = require('../db');
const { sendResponse } = require('../utils');

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  const user = await db.query('DELETE FROM person where id = $1', [id]);
  // res.json(user.rows[0]);

  sendResponse(res, {
    message: 'Success remove',
  });
};

module.exports = deleteUserById;
