import express from 'express'
import AuthController from '../controllers/auth.controller.js'

const AuthRoute = express.Router()

AuthRoute
	.route('/login')
	.post((req, res) => AuthController.loginUserByEmailAndPassword(req, res))

AuthRoute
	.route('/singup')
	.post((req, res) => AuthController.singInUser(req, res))

export default AuthRoute
