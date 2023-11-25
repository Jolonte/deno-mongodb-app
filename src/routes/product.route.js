import express from 'express'
import productController from '../controllers/product.controller.js'

const ProductRouter = express.Router()

ProductRouter
	.route('/products')
	.post((req, res) => productController.createProduct(req, res))
	.get((req, res) => productController.getAllProducts(req, res))

ProductRouter
	.route('/products/:id')
	.get((req, res) => productController.getProductById(req, res))
	.delete((req, res) => productController.deleteProductById(req, res))
	.put((req, res) => productController.updateProductById(req, res))

export default ProductRouter
