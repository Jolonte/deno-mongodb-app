import express from 'express'
import UserController from '../controllers/user.controller.js'

const UserRouter = express.Router()

UserRouter
	.route('/users')
	.post((req, res) => UserController.createUser(req, res))

UserRouter
	.route('/users')
	.get((req, res) => UserController.getAllUsers(req, res))

UserRouter
	.route('/users/:id')
	.get((req, res) => UserController.getById(req, res))

UserRouter
	.route('/users/:id')
	.delete((req, res) => UserController.deleteById(req, res))

UserRouter
	.route('/users/:id')
	.put((req, res) => UserController.updateById(req, res))

export default UserRouter
