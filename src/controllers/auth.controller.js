import UserModel from '../models/user.model.js'
import createToken from '../utils/apiKey.utils.js'
import { setCookie } from 'https://deno.land/std@0.208.0/http/cookie.ts'

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
		// userSchema.statics.login = async function (email, password) {
		// 	const user = await this.findOne({ email })
		// 	if (user) {
		// 		const auth = await bcrypt.compare(password, user.password)
		// 		if (auth) { // Se a senha estiver correta, retorna o usuário
		// 			return user
		// 		}
		// 		throw Error('Senha incorreta.')
		// 	}
		// 	throw Error('E-mail incorreto.')
		// }

		try {
			const { email, password } = req.body

			const user = await UserModel.findOne({
				_id: '656a660034e878e736515532',
			})

			if (!user) {
				res.status(404).json('Usuário não encontrado.')
				return
			}

			res.status(200).json({ user, msg: 'Operação bem sucedida.' })
			// const user = await UserModel.login(email, password)
			// res.status(200).json({ userId: user._id, msg: 'Operação bem sucedida.' })
		} catch (error) {
			res.status(400).send(error.message)
		}
	},
}

export default AuthController
