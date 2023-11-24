import express from 'express'
import UserController from '../controllers/user.controller.js'

const UserRouter = express.Router()

UserRouter.route('/users').post((req, res) => {
	UserController.createUser(req, res)
})

export default UserRouter
