import express from 'express'
import ProductController from '../controllers/product.controller.js'

const ProductRouter = express.Router()

ProductRouter
	.route('/products')
	.post((req, res) => ProductController.createProduct(req, res))
	.get((req, res) => ProductController.getAllProducts(req, res))

ProductRouter
	.route('/products/:id')
	.get((req, res) => ProductController.getProductById(req, res))
	.delete((req, res) => ProductController.deleteProductById(req, res))
	.put((req, res) => ProductController.updateProductById(req, res))

export default ProductRouter
