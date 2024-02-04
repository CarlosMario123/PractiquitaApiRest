const mysql = require("mysql2/promise");
//aca utilizaremos el patron singleton 
class Database {
  constructor() {
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'Usuario_Singleton',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    //verificamos si se conectar ala bd
    this.getConnection().then(connection => {
      console.log("Conexión exitosa a la base de datos");
      connection.release();
    }).catch(error => {
      console.error("Error al conectar a la base de datos:", error.message);
  
    });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }

  async getConnection() {
    try {
      const connection = await this.pool.getConnection();
      return connection;
    } catch (error) {
      console.error("Error al obtener la conexión de la base de datos:", error.message);
      throw error;
    }
  }
}

module.exports = Database.getInstance();
