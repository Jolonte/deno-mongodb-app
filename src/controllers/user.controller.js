import UserModel from '../models/user.model.js'

const UserController = {
	createUser: async (req, res) => {
		try {
			console.log(req.body)
			await UserModel.create(req.body)
			res.status(201).json({ msg: `Usuario criado com sucesso!` })
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default UserController
