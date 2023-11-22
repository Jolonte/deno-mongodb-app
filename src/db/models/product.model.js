import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	id_prod: String,
	images: String,
	category: String,
	size: String,
	amount: Number,
	model: String,
})

const ProductModel = mongoose.model('product', productSchema)

export default ProductModel
