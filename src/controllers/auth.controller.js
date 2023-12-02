import UserModel from '../models/user.model.js'
import createToken from '../utils/apiKey.utils.js'
import * as bcrypt from 'https://deno.land/x/bcrypt@v0.4.1/mod.ts'
import { setCookie } from 'https://deno.land/std@0.208.0/http/cookie.ts'

const AuthController = {
	singInUser: async (req, res) => {
		try {
			const user = await UserModel.create(req.body)
			const token = await createToken(user._id)

			setCookie(res, {
				name: 'jwt',
				value: token,
				httpOnly: true,
				secure: true,
				maxAge: 86400,
			})

			res.status(201).json({
				userId: user._id,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	loginUserByEmailAndPassword: async (req, res) => {
		try {
			const { email, password } = req.body

			const user = await UserModel.findOne({ email })

			if (!user) {
				res.status(404).json('Usuário não encontrado.')
				return
			}

			const auth = await bcrypt.compare(password, user.password)

			if (auth) {
				res.status(200).json({
					userId: user._id,
					msg: 'Operação bem sucedida.',
				})
			} else {
				res.status(500).json({ msg: 'Senha incorreta.' })
			}
		} catch (error) {
			res.status(400).send(error.message)
		}
	},
}

export default AuthController
