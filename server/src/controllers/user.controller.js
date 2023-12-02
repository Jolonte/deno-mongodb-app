import UserModel from '../models/user.model.js'

const UserController = {
	getAllUsers: async (req, res) => {
		try {
			const users = await UserModel.find()
			res.status(200).json(users)
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getUserById: async (req, res) => {
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

	deleteUserById: async (req, res) => {
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

	updateUserById: async (req, res) => {
		try {
			const id = req.params.id
			const user = await UserModel.findByIdAndUpdate(id, req.body, {
				new: true,
			})

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
