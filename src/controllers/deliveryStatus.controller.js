import DeliveryStatusModel from '../models/deliveryStatus.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const DeliveryStatusController = {
	createDeliveryStatus: async (req, res) => {
		try {
			const { userId, productId } = req.body

			// Verifica se os campos userId e productId existem no BD
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

			await DeliveryStatusModel.create(req.body)
			res.status(201).json({ msg: 'Operação foi concluída com sucesso!' })
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getAllDeliveryStatus: async (req, res) => {
		try {
			const deliveryStatus = await DeliveryStatusModel.find().populate(
				'userId productId',
			)
			res.status(200).json({
				deliveryStatus,
				msg: 'Operação foi concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getDeliveryStatusById: async (req, res) => {
		try {
			const id = req.params.id
			const deliveryStatus = await DeliveryStatusModel.findById(id)
				.populate('userId productId')

			if (!deliveryStatus) {
				res.status(404).json({
					msg: 'Status de entrega não encontrado.',
				})
				return
			}

			res.status(200).json({
				deliveryStatus,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	deleteDeliveryStatusById: async (req, res) => {
		try {
			const id = req.params.id
			const deliveryStatus = await DeliveryStatusModel.findByIdAndDelete(
				id,
			)

			if (!deliveryStatus) {
				res.status(404).json({
					msg: 'Status de entrega não encontrado.',
				})
				return
			}

			res.status(200).json({
				deliveryStatus,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	updateDeliveryStatusById: async (req, res) => {
		try {
			const id = req.params.id
			const { userId, productId } = req.body

			// Verifica se os campos userId e productId existem no BD
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

			const deliveryStatus = await DeliveryStatusModel.findByIdAndUpdate(
				id,
				req.body,
				{ new: true },
			).populate('userId productId')

			if (!deliveryStatus) {
				res.status(404).json({
					msg: 'Status de entrega não encontrado.',
				})
				return
			}
			res.status(200).json({
				deliveryStatus,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default DeliveryStatusController
