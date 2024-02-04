
const userRepository = require('../repositorys/UserRepository');

class UserController {
  async createUser(req, res) {
    try {
      const newUser = req.body;
      //aca creamos el usuario donde definiera si se marca un error al crear el usuario
      const createdUser = await userRepository.create(newUser);
      res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor en la parte de la creacion del usuario' });
    }
  }

  async getAllUsers(req, res) {
    try {
      const allUsers = await userRepository.getAllUsers();
      res.json(allUsers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor al momento de traer a los usuario' });
    }
  }

  // Agrega más métodos del controlador según sea necesario...
}

module.exports = new UserController();
