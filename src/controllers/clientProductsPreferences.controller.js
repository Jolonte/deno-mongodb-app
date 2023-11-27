import ClientPreferencesModel from '../models/clientProductsPreferences.model.js'
import UserModel from '../models/user.model.js'

const ClientPreferencesController = {
	addToClientPreferences: async (req, res) => {
		try {
			const { userId } = req.body

			// Verificar se o userId existe no BD
			const userExists = await UserModel.exists({ _id: userId })

			if (!userExists) {
				res.status(404).json({ msg: 'Usuário não encontrado.' })
				return
			}

			await ClientPreferencesModel.create(req.body)
			res.status(201).json({ msg: 'Operação concluída com sucesso!' })
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getAllClientPreferences: async (req, res) => {
		try {
			const clientPreference = await ClientPreferencesModel.find()
				.populate('userId')
			res.status(200).json({
				clientPreference,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getClientPreferencesById: async (req, res) => {
		try {
			const id = req.params.id
			const clientPreference = await ClientPreferencesModel.findById(id)
				.populate('userId')

			if (!clientPreference) {
				res.status(404).json({
					msg: 'Preferência de usuário não encontrada!',
				})
				return
			}

			res.status(200).json({
				clientPreference,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	deleteClientPreferencesById: async (req, res) => {
		try {
			const id = req.params.id
			const clientPreference = await ClientPreferencesModel
				.findByIdAndDelete(id)

			if (!clientPreference) {
				res.status(404).json({
					msg: 'Preferência de usuário não encontrada!',
				})
				return
			}

			res.status(200).json({
				clientPreference,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	updateClientPreferencesById: async (req, res) => {
		try {
			const id = req.params.id
			const { userId } = req.body

            // verificar se o usuário existe no BD
			const userExists = await UserModel.exists({ _id: userId })

			if (!userExists) {
				res.status(404).json({ msg: 'Usuário não encontrado.' })
				return
			}

			const clientPreference = await UserModel.findByIdAndUpdate(
				id,
				req.body,
				{ new: true },
			).populate('userId')
			res.status(200).json({
				clientPreference,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default ClientPreferencesController
