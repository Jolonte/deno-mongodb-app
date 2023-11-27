import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	productImages: [{ type: String, required: true }],
	productPrice: { type: Number, required: true, default: 0.00},
	productCategory: {
		type: String,
		required: true,
		// enum: [''],
	},
	productSize: { type: String, required: true },
	productStock: { type: Number, required: true },
	productModel: { type: String, required: true },
}, { timestamps: true })

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel
