import ShoppingCartModel from '../models/shoppingCart.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const ShoppingCartController = {
	addToShoppingCart: async (req, res) => {
		try {
			const { userId, items } = req.body

			console.log(
				`Adding items to shopping cart for user with ID ${userId}.`,
			)

			const userExists = await UserModel.exists({ _id: userId })

			if (!userExists) {
				console.log(`User with ID ${userId} not found.`)
				return res.status(400).json({
					msg: 'User not found.',
				})
			}

			for (const item of items) {
				const { productId, quantity } = item
				const productExists = await ProductModel.exists({
					_id: productId,
					productStock: { $gte: quantity },
				})

				if (!productExists) {
					console.log(
						`Product with ID ${productId} not found or insufficient stock.`,
					)
					return res.status(400).json({
						msg: 'Product not found or insufficient stock.',
					})
				}
			}

			await ShoppingCartModel.findOneAndUpdate(
				{ userId },
				{ $push: { items: { $each: items } } },
				{ upsert: true },
			)

			for (const item of items) {
				const { productId, quantity } = item
				await ProductModel.findByIdAndUpdate(productId, {
					$inc: { productStock: -quantity },
				})
			}

			console.log('Items added to shopping cart successfully.')
			return res.status(201).json({
				msg: 'Operation completed successfully!',
			})
		} catch (error) {
			console.error('Error adding items to shopping cart:', error.message)
			return res.status(500).send(error.message)
		}
	},

	getAllShoppingCart: async (req, res) => {
		try {
			const shoppingCart = await ShoppingCartModel.find().lean().populate(
				'userId items.productId',
			)
			console.log('Retrieved all shopping carts successfully.')
			res.status(200).json({
				shoppingCart,
				msg: 'Operation completed successfully!',
			})
		} catch (error) {
			console.error('Error fetching all shopping carts:', error.message)
			res.status(500).send(error.message)
		}
	},

	getShoppingCartById: async (req, res) => {
		try {
			const id = req.params.id
			const shoppingCart = await ShoppingCartModel.findById(id).lean()
				.populate(
					'userId cartProducts.productId',
				)

			if (!shoppingCart) {
				console.log(`Shopping cart with ID ${id} not found.`)
				res.status(404).json({
					msg: 'Shopping cart not found.',
				})
				return
			}

			console.log(`Retrieved shopping cart with ID ${id} successfully.`)
			res.status(200).json({
				shoppingCart,
				msg: 'Operation completed successfully!',
			})
		} catch (error) {
			console.error('Error fetching shopping cart by ID:', error.message)
			res.status(500).send(error.message)
		}
	},

	deleteShoppingCartById: async (req, res) => {
		try {
			const id = req.params.id
			const shoppingCart = await ShoppingCartModel.findById(id)

			if (!shoppingCart) {
				console.log(
					`Shopping cart with ID ${id} not found for deletion.`,
				)
				res.status(404).json({
					msg: 'Shopping cart not found.',
				})
				return
			}

			for (const item of shoppingCart.items) {
				await ProductModel.findByIdAndUpdate(item.productId, {
					$inc: { productStock: item.quantity },
				})
			}

			await ShoppingCartModel.findByIdAndDelete(id)

			console.log(`Deleted shopping cart with ID ${id} successfully.`)
			res.status(200).json({
				shoppingCart,
				msg: 'Operation completed successfully!',
			})
		} catch (error) {
			console.error('Error deleting shopping cart by ID:', error.message)
			res.status(500).send(error.message)
		}
	},

	updateShoppingCartById: async (req, res) => {
		try {
			const id = req.params.id
			const { productId, quantity } = req.body

			const shoppingCart = await ShoppingCartModel.findById(id)

			if (!shoppingCart) {
				console.log(`Shopping cart with ID ${id} not found for update.`)
				return res.status(404).json({
					msg: 'Shopping cart not found.',
				})
			}

			const existingProduct = shoppingCart.items.find(
				(item) => item.productId.toString() === productId,
			)

			const userExists = await UserModel.exists({
				_id: shoppingCart.userId,
			})
			const productExists = await ProductModel.exists({
				_id: existingProduct?.productId,
			})

			if (!userExists) {
				console.log(`User with ID ${shoppingCart.userId} not found.`)
				return res.status(400).json({
					msg: 'User not found.',
				})
			} else if (!productExists) {
				console.log(
					`Product with ID ${existingProduct?.productId} not found.`,
				)
				return res.status(400).json({
					msg: 'Product not found.',
				})
			}

			if (existingProduct) {
				existingProduct.quantity = quantity
			} else {
				shoppingCart.items.push({ productId, quantity })
			}

			const updatedShoppingCart = await shoppingCart.save()

			await ProductModel.findByIdAndUpdate(productId, {
				$inc: { productStock: -quantity },
			})

			console.log(`Updated shopping cart with ID ${id} successfully.`)
			res.status(200).json({
				updatedShoppingCart,
				msg: 'Operation completed successfully!',
			})
		} catch (error) {
			console.error('Error updating shopping cart by ID:', error.message)
			res.status(500).send(error.message)
		}
	},
}

export default ShoppingCartController
