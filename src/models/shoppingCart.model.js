import mongoose from 'mongoose'

const shoppingCartSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	items: [{
		productId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
			default: 1,
		},
	}],
}, { timestamps: true })

const ShoppingCartModel = mongoose.model('ShoppingCart', shoppingCartSchema)

export default ShoppingCartModel
