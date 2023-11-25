import ShoppingCartModel from '../models/shoppingCart.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const ShoppingCartController = {
	addToShoppingCart: async (req, res) => {
		try {
			const { userId, items } = req.body

			// Verifica se os campos userId existem no BD
			const userExists = await UserModel.exists({ _id: userId })

			if (!userExists) {
				return res.status(400).json({
					msg: 'Usuário não encontrado.',
				})
			}

			// Verifica se há estoque suficiente para todos os itens
			for (const item of items) {
				const { productId, quantity } = item
				const productExists = await ProductModel.exists({
					_id: productId,
					productStock: { $gte: quantity },
				})

				if (!productExists) {
					return res.status(400).json({
						msg: 'Produto não encontrado ou estoque insuficiente.',
					})
				}
			}

			// Adiciona todos os itens ao carrinho
			await ShoppingCartModel.findOneAndUpdate(
				{ userId },
				{ $push: { items: { $each: items } } },
				{ upsert: true },
			)

			// Atualiza o estoque para cada produto
			for (const item of items) {
				const { productId, quantity } = item
				await ProductModel.findByIdAndUpdate(productId, {
					$inc: { productStock: -quantity },
				})
			}

			return res.status(201).json({
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			return res.status(500).send(error.message)
		}
	},

	getAllShoppingCart: async (req, res) => {
		try {
			const shoppingCart = await ShoppingCartModel.find().populate(
				'userId items.productId',
			)
			res.status(200).json({
				shoppingCart,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getShoppingCartById: async (req, res) => {
		try {
			const id = req.params.id
			const shoppingCart = await ShoppingCartModel.findById(id).populate(
				'userId cartProducts.productId',
			)

			if (!shoppingCart) {
				res.status(404).json({
					msg: 'Carrinho de compras não encontrado.',
				})
				return
			}

			res.status(200).json({
				shoppingCart,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	deleteShoppingCartById: async (req, res) => {
		try {
			const id = req.params.id
			const shoppingCart = await ShoppingCartModel.findById(id)

			// Verifica se o carrinho de compras existe
			if (!shoppingCart) {
				res.status(404).json({
					msg: 'Carrinho de compras não encontrado.',
				})
				return
			}

			// Retorna os itens ao estoque
			for (const item of shoppingCart.items) {
				await ProductModel.findByIdAndUpdate(item.productId, {
					$inc: { productStock: item.quantity },
				})
			}

			// Exclui o carrinho de compras
			await ShoppingCartModel.findByIdAndDelete(id)

			res.status(200).json({
				shoppingCart,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	updateShoppingCartById: async (req, res) => {
		try {
			const id = req.params.id
			const { productId, quantity } = req.body

			// Encontra o carrinho de compras
			const shoppingCart = await ShoppingCartModel.findById(id)

			if (!shoppingCart) {
				res.status(404).json({
					msg: 'Carrinho de compras não encontrado.',
				})
				return
			}

			// Verifica se o produto já está no carrinho
			const existingProduct = shoppingCart.items.find(
				(item) => item.productId.toString() === productId,
			)

			if (existingProduct) {
				// Se o produto já estiver no carrinho, atualiza a quantidade
				existingProduct.quantity = quantity
			} else {
				// Se o produto não estiver no carrinho, adiciona ao array
				shoppingCart.items.push({ productId, quantity })
			}

			// Salva as alterações no carrinho de compras
			const updatedShoppingCart = await shoppingCart.save()

			// Atualiza o estoque do produto
			await ProductModel.findByIdAndUpdate(productId, {
				$inc: { productStock: -quantity }, // Reduz o estoque com base na quantidade do carrinho
			})

			res.status(200).json({
				updatedShoppingCart,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default ShoppingCartController
