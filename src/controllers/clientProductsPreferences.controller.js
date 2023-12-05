import ClientPreferencesModel from '../models/clientProductsPreferences.model.js'
import UserModel from '../models/user.model.js'

const ClientPreferencesController = {
	addToClientPreferences: async (req, res) => {
		try {
			const { userId } = req.body

			console.log(
				`Adding to client preferences for user with ID ${userId}.`,
			)

			// Verificar se o userId existe no BD
			const userExists = await UserModel.exists({ _id: userId })

			if (!userExists) {
				console.log(`User with ID ${userId} not found.`)
				res.status(404).json({ msg: 'User not found.' })
				return
			}

			await ClientPreferencesModel.create(req.body)

			console.log('Client preferences added successfully.')
			res.status(201).json({ msg: 'Operation completed successfully!' })
		} catch (error) {
			console.error('Error adding to client preferences:', error.message)
			res.status(500).send(error.message)
		}
	},

	getAllClientPreferences: async (req, res) => {
		try {
			const clientPreference = await ClientPreferencesModel
				.find()
				.lean()
				.populate('userId')

			console.log('Retrieved all client preferences successfully.')
			res.status(200).json({
				clientPreference,
				msg: 'Operation completed successfully!',
			})
		} catch (error) {
			console.error(
				'Error fetching all client preferences:',
				error.message,
			)
			res.status(500).send(error.message)
		}
	},

	getClientPreferencesById: async (req, res) => {
		try {
			const id = req.params.id
			const clientPreference = await ClientPreferencesModel
				.findById(id)
				.lean()
				.populate('userId')

			if (!clientPreference) {
				console.log(`Client preference with ID ${id} not found.`)
				res.status(404).json({
					msg: 'Client preference not found.',
				})
				return
			}

			console.log(
				`Retrieved client preference with ID ${id} successfully.`,
			)
			res.status(200).json({
				clientPreference,
				msg: 'Operation completed successfully!',
			})
		} catch (error) {
			console.error(
				'Error fetching client preference by ID:',
				error.message,
			)
			res.status(500).send(error.message)
		}
	},

	deleteClientPreferencesById: async (req, res) => {
		try {
			const id = req.params.id
			const clientPreference = await ClientPreferencesModel
				.findByIdAndDelete(id)

			if (!clientPreference) {
				console.log(
					`Client preference with ID ${id} not found for deletion.`,
				)
				res.status(404).json({
					msg: 'Client preference not found.',
				})
				return
			}

			console.log(`Deleted client preference with ID ${id} successfully.`)
			res.status(200).json({
				clientPreference,
				msg: 'Operation completed successfully!',
			})
		} catch (error) {
			console.error(
				'Error deleting client preference by ID:',
				error.message,
			)
			res.status(500).send(error.message)
		}
	},

	updateClientPreferencesById: async (req, res) => {
		try {
			const id = req.params.id
			const { userId } = req.body

			console.log(
				`Updating client preference with ID ${id} for user with ID ${userId}.`,
			)

			// verificar se o usuário existe no BD
			const userExists = await UserModel.exists({ _id: userId })

			if (!userExists) {
				console.log(`User with ID ${userId} not found.`)
				res.status(404).json({ msg: 'User not found.' })
				return
			}

			const clientPreference = await ClientPreferencesModel
				.findByIdAndUpdate(id, req.body, { new: true })
				.lean()

			console.log(`Updated client preference with ID ${id} successfully.`)
			res.status(200).json({
				clientPreference,
				msg: 'Operation completed successfully!',
			})
		} catch (error) {
			console.error(
				'Error updating client preference by ID:',
				error.message,
			)
			res.status(500).send(error.message)
		}
	},
}

export default ClientPreferencesController
