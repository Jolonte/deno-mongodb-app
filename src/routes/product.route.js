import express from 'express'
import productController from '../controllers/product.controller.js'

const ProductRouter = express.Router()

ProductRouter
	.route('/products')
	.post((req, res) => productController.createProduct(req, res))

export default ProductRouter
