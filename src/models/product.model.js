import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	productId: String,
	productImages: String,
	productCategory: String,
	productSize: String,
	productAmount: Number,
	productModel: String,
}, { timestamps: true })

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel
