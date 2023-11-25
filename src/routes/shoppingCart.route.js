import express from 'express'
import ShoppingCartController from '../controllers/shoppingCart.controller.js'

const ShoppingCartRoute = express.Router()

ShoppingCartRoute
	.route('/shoppingcart')
	.post((req, res) => ShoppingCartController.addToShoppingCart(req, res))
	.get((req, res) => ShoppingCartController.getAllShoppingCart(req, res))

ShoppingCartRoute
	.route('/shoppingcart/:id')

export default ShoppingCartRoute
