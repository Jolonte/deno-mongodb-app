import UserModel from '../models/user.model.js'
import { create } from 'https://deno.land/x/djwt@v3.0.1/mod.ts'
import { setCookie } from 'https://deno.land/std@0.208.0/http/cookie.ts'

const maxAge = 3 * 24 * 60 * 60 // Value for 3 days

const createToken = (paramId) => {
	const header = { alg: 'HS256', typ: 'JWT' }
	const payload = { paramId }
	const key = Deno.env.get('JWT_TOKEN_SECRET')
	return create(header, payload, key)
}

const AuthController = {
	singInUser: async (req, res) => {
		try {
			const user = await UserModel.create(req.body)
			const token = createToken(user._id)

			setCookie(res, {
				name: 'jwt',
				value: token,
				httpOnly: true,
				secure: true,
				maxAge: maxAge * 1000,
			})

			res.status(201).json({
				userId: user._id,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
	// loginUserByEmailAndPassword: async (req, res) => {
	// 	try {
	// 		const { email, password } = req.body

	// 		if (!email) {
	// 			res.status(400).send({ msg: 'E-mail vazio.' })
	// 		} else if (!password) {
	// 			res.status(400).send({ msg: 'Senha vazia.' })
	// 		}

	// 	} catch (error) {
	// 		console.log(error.message)
	// 		res.status(500).send(error.message)
	// 	}
	// },
}

export default AuthController
