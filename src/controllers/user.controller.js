import UserModel from '../models/user.model.js'

const UserController = {
	createUser: async (req, res) => {
		try {
			await UserModel.create(req.body)
			res.status(201).json({ msg: 'Operação concluída com sucesso!' })
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getAllUsers: async (req, res) => {
		try {
			const users = await UserModel.find()
			if (!users.length) {
				res.status(200).json({
					msg: 'Não existem usuários cadastrados.',
				})
				return
			}
			res.status(200).json(users)
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getById: async (req, res) => {
		try {
			const id = req.params.id
			const user = await UserModel.findById(id)
			if (!user) {
				res.status(404).json({ msg: 'Usuário não encontrado.' })
				return
			}
			res.status(200).json(user)
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	deleteById: async (req, res) => {
		try {
			const id = req.params.id
			const user = await UserModel.findByIdAndDelete(id)
			if (!user) {
				res.status(404).json({ msg: 'Usuário não encontrado.' })
				return
			}
			res.status(200).json({
				user,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	updateById: async (req, res) => {
		try {
			const id = req.params.id
			const user = await UserModel.findByIdAndUpdate(id, req.body)

			if (!user) {
				res.status(404).json({ msg: 'Usuário não encontrado.' })
				return
			}
			res.status(200).json({
				user,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default UserController
