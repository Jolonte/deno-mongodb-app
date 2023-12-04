import express from 'express'
import UserController from '../controllers/user.controller.js'

const UserRouter = express.Router()

// Rota para obter todos os usuários
UserRouter
	.route('/users')
	.get((req, res) => UserController.getAllUsers(req, res))

// Rotas para obter, excluir e atualizar um usuário específico
UserRouter
	.route('/users/:id')
	.get((req, res) => UserController.getUserById(req, res))
	.delete((req, res) => UserController.deleteUserById(req, res))
	.put((req, res) => UserController.updateUserById(req, res))

export default UserRouter
