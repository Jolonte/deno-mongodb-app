import ShoppingCartModel from '../models/shoppingCart.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const ShoppingCartController = {
	addToShoppingCart: async (req, res) => {
		try {
			const { userId, productId } = req.body

			// Verifica se os campos userId e productId existem no BD
			const userExists = await UserModel.exists({ _id: userId })
			const productExists = await ProductModel.findOne({
				'cartProducts.productId': productId,
			})

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

			await ShoppingCartModel.create(req.body)
			res.status(201).json({ msg: 'Operação concluída com sucesso!' })
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getAllShoppingCart: async (req, res) => {
		try {
			const products = await ShoppingCartModel.find()
			res.status(200).json({
				products,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default ShoppingCartController
