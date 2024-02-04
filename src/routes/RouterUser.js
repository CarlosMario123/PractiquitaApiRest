
const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/users', userController.createUser);//Crear usuario endpoint

router.get('/users', userController.getAllUsers);//traer usuarios enponts


module.exports = router;
