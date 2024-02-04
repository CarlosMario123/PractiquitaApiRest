const bcrypt = require('bcrypt');
const db = require('../config/Db');

class UserRepository {

  async create(user) {
    const connection = await db.getConnection();
    try {
      //encriptamos las contraseñas con un salto de 10
      const hashedPassword = await bcrypt.hash(user.password, 10);

      const [result] = await connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [user.name, user.email, hashedPassword]);
      user.password = hashedPassword;
      return user;
    } finally {
      connection.release();
    }
  }

  async getAllUsers() {
    const connection = await db.getConnection();
    try {
      const [rows] = await connection.query('SELECT id, name, email FROM users');
      return rows;
    } finally {
      connection.release();
    }
  }
}

module.exports = new UserRepository();
