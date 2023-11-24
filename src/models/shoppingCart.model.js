import mongoose from 'mongoose'

const shoppingCartSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	cartProducts: [
		{
			productId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product',
				required: true,
			},
			cartAmount: { type: Number, required: true },
		},
	],
})

const ShoppingCartModel = mongoose.model('ShoppingCart', shoppingCartSchema)

export default ShoppingCartModel
