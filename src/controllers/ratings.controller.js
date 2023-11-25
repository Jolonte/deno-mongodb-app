import RatingModel from '../models/ratings.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const RatingController = {
	createRating: async (req, res) => {
		try {
			const { userId, productId } = req.body

			// Verifica se os campos userId e productId existem no BD
			const userExists = await UserModel.exists({ _id: userId })
			const productExists = await ProductModel.exists({ _id: productId })

			if (!userExists || !productExists) {
				res.status(400).json({
					msg: 'Usuário ou produto não encontrados.',
				})
				return
			}

			await RatingModel.create(req.body)
			res.status(201).json({ msg: 'Operação concluída com sucesso!' })
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default RatingController
