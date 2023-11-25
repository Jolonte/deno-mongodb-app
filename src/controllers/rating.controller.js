import RatingModel from '../models/ratings.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const RatingController = {
	addRating: async (req, res) => {
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

			await RatingModel.create(req.body)
			res.status(201).json({ msg: 'Operação concluída com sucesso!' })
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getAllRatings: async (req, res) => {
		try {
			const rating = await RatingModel.find().populate('userId productId')
			res.status(200).json({
				rating,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getRatingById: async (req, res) => {
		try {
			const id = req.params.id
			const rating = await RatingModel.findById(id).populate(
				'userId productId',
			)
			if (!rating) {
				res.status(404).json({
					msg: 'Rating não encontrado.',
				})
				return
			}
			res.status(200).json({
				rating,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(505).send(error.message)
		}
	},

	deleteRatingById: async (req, res) => {
		try {
			const id = req.params.id
			const rating = await RatingModel.findByIdAndDelete(id).populate(
				'userId productId',
			)
			if (!rating) {
				res.status(404).json({ msg: 'Rating não encontrado.' })
				return
			}
			res.status(200).json({
				rating,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(505).send(error.message)
		}
	},

	updateRatingById: async (req, res) => {
		try {
			const id = req.params.id
			const rating = await RatingModel.findByIdAndUpdate(id, req.body, {
				new: true,
			}).populate('userId productId')
			if (!rating) {
				res.status(404).json({ msg: 'Rating não encontrado.' })
				return
			}
			res.status(200).json({
				rating,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default RatingController
