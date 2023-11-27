import DevolutionStatusModel from '../models/devolutionStatus.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const DevolutionStatusController = {
	createDevolutionStatus: async (req, res) => {
		try {
			const { userId, productId } = req.body

			const userExists = await UserModel.exists({ _id: userId })
			const productExists = await ProductModel.exists({ _id: productId })

			if (!userExists) {
				return res.status(400).json({
					msg: 'Usuário não encontrado.',
				})
			} else if (!productExists) {
				return res.status(400).json({
					msg: 'Produto não encontrado.',
				})
			}

			await DevolutionStatusModel.create(req.body)
			res.status(201).json({ msg: 'Operação foi concluída com sucesso!' })
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getAllDevolutionStatus: async (req, res) => {
		try {
			const devolutionStatus = await DevolutionStatusModel
				.find()
				.populate('userId productId')
				.lean()

			res.status(200).json({
				devolutionStatus,
				msg: 'Operação foi concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getDevolutionStatusById: async (req, res) => {
		try {
			const id = req.params.id
			const devolutionStatus = await DevolutionStatusModel
				.findById(id)
				.populate('userId productId')
				.lean()

			if (!devolutionStatus) {
				res.status(404).json({
					msg: 'Status de devolução não encontrado.',
				})
				return
			}

			res.status(200).json({
				devolutionStatus,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	deleteDevolutionStatusById: async (req, res) => {
		try {
			const id = req.params.id
			const devolutionStatus = await DevolutionStatusModel
				.findByIdAndDelete(id)

			if (!devolutionStatus) {
				res.status(404).json({
					msg: 'Status de devolução não encontrado.',
				})
				return
			}

			res.status(200).json({
				devolutionStatus,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	updateDevolutionStatusById: async (req, res) => {
		try {
			const id = req.params.id
			const { userId, productId } = req.body

			const userExists = await UserModel.exists({ _id: userId })
			const productExists = await ProductModel.exists({ _id: productId })

			if (!userExists) {
				res.status(400).json({
					msg: 'Usuário não encontrado.',
				})
				return
			} else if (!productExists) {
				res.status(400).json({
					msg: 'Produto não encontrado.',
				})
				return
			}

			const devolutionStatus = await DevolutionStatusModel
				.findByIdAndUpdate(id, req.body, { new: true })
				.populate('userId productId')
				.lean()

			if (!devolutionStatus) {
				res.status(404).json({
					msg: 'Status de devolução não encontrado.',
				})
				return
			}

			res.status(200).json({
				devolutionStatus,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default DevolutionStatusController
