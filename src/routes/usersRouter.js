const express = require('express')
const UsersController = require('../controllers/UsersController')

const usersRouter = express.Router()

usersRouter.get('/users', UsersController.getUsers)
usersRouter.get('/users/:id', UsersController.getUserById)

module.exports = usersRouter