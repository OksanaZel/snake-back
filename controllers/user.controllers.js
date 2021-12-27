const { db } = require('../db');
const { sendResponse } = require('../utils');

class UserControllers {
  async createUser(req, res) {
    const { name, score } = req.body;
    const newPerson = await db.query(
      'INSERT INTO person(name, score) values ($1, $2) RETURNING *',
      [name, score],
    );

    sendResponse(res, newPerson.rows[0], 201);
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM person');
    sendResponse(res, users.rows);
  }

  async getUserById(req, res) {
    const id = req.params.id;
    const user = await db.query('SELECT * FROM person where id = $1', [id]);
    // res.json(user.rows[0]);
    sendResponse(res, user.rows[0]);
  }

  async updateUserScore(req, res) {
    const id = req.params.id;
    const { score } = req.body;
    const user = await db.query(
      'UPDATE person set score = $1 where id = $2 RETURNING *',
      [score, id],
    );
    sendResponse(res, user.rows[0]);
  }

  async deleteUserById(req, res) {
    const id = req.params.id;
    const user = await db.query('DELETE FROM person where id = $1', [id]);
    // res.json(user.rows[0]);
    sendResponse(res, {
      message: 'Success remove',
    });
  }
}

module.exports = new UserControllers();
