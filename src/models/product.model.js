import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	productImages: [{ type: String, required: true }],
	productCategory: {
		type: String,
		required: true,
		// enum: [''],
	},
	productSize: { type: String, required: true },
	productAmount: { type: Number, required: true },
	productModel: { type: String, required: true },
}, { timestamps: true })

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel
