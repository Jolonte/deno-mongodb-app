import mongoose from 'mongoose'

const shoppingCartSchema = new mongoose.Schema({
	user_id: String,
	cart_products: [
		{
			prod_id: String,
			cart_amount: Number,
		},
	],
})

const ShoppingCartModel = new mongoose.model(
	'shoppingCart',
	shoppingCartSchema,
)

export default ShoppingCartModel
