import UserModel from '../models/user.model.js'
// import * as bcrypt from 'https://deno.land/x/bcrypt@v0.3.0/mod.ts'

const AuthController = {
	singInUser: async (req, res) => {
		try {
			// const userCreated = {
			// 	firstName: req.body.firstName,
			// 	lastName: req.body.lastName,
			// 	age: req.body.age,
			// 	sex: req.body.sex,
			// 	email: req.body.email,
			// 	password: req.body.password,
			// 	cpf: req.body.cpf,
			// 	address: req.body.address,
			// 	cep: req.body.cep,
			// 	auth: true,
			// }

			const user = await UserModel.create(req.body)

			res.status(201).json({
				userId: user._id,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			console.error('Error in signInUser:', error)
			res.status(500).send(error.message)
		}
	},

	loginUserByEmailAndPassword: async (req, res) => {
		try {
			const { email } = req.body
			const user = await UserModel.findOne({ email })

			if (!user) {
				res.status(404).json('Usuário não encontrado.')
				return
			}

			// const auth = await bcrypt.compare(password, user.password)

			// if (auth) {
			// 	await UserModel.findByIdAndUpdate(user, { auth: true }, {
			// 		new: true,
			// 	})

			// 	res.status(200).json({
			// 		userId: user._id,
			// 		msg: 'Operação bem sucedida.',
			// 	})
			// } else {
			// 	res.status(500).json({ msg: 'Senha incorreta.' })
			// }

			await UserModel.findByIdAndUpdate(user, { auth: true }, {
				new: true,
			})

			res.status(200).json({
				userId: user._id,
				msg: 'Operação bem sucedida.',
			})
		} catch (error) {
			console.error('Error in loginUserByEmailAndPassword:', error)
			res.status(400).send(error.message)
		}
	},

	logoutUserById: async (req, res) => {
		try {
			const id = req.body.id
			const user = await UserModel.findByIdAndUpdate(id, {
				auth: false,
			}, { new: true })

			if (!user) {
				res.status(404).json('Usuário não encontrado.')
				return
			}

			res.status(200).json({
				userId: user._id,
				msg: 'Operação bem sucedida.',
			})
		} catch (error) {
			console.error('Erro em logoutUser:', error)
			res.status(500).send(error.message)
		}
	},
}

export default AuthController
