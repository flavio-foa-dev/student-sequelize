const express = require('express');
const UsersController = require('../controllers/UsersController');

const usersRouter = express.Router();

usersRouter.get('/users', UsersController.getUsers);
usersRouter.get('/users/:id', UsersController.getUserById);
usersRouter.post('/users', UsersController.createUser);
usersRouter.put('/users/:id', UsersController.updateUser);
usersRouter.delete('/users/:id', UsersController.destroyUser);

module.exports = usersRouter;