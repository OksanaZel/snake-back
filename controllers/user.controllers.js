const { db } = require("../db");

class UserControllers {
  async createUser(req, res) {
    const { name, score } = req.body;
    const newPerson = await db.query(
      "INSERT INTO person(name, score) values ($1, $2) RETURNING *",
      [name, score]
    );
    res.json(newPerson.rows[0]);
  }
  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM person");
    res.json(users.rows);
  }
  async getUserById(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM person where id = $1", [id]);
    res.json(user.rows[0]);
  }

  async updateUserScore(req, res) {
    const id = req.params.id;
    const { score } = req.body;
    const user = await db.query(
      "UPDATE person set score = $1 where id = $2 RETURNING *",
      [score, id]
    );
    res.json(user.rows[0]);
  }

  async deleteUserById(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM person where id = $1", [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserControllers();
