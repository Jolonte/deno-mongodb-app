import express from 'express'
import UserRouter from './user.route.js'
import ProductRouter from './product.route.js'
import RatingRouter from './ratings.route.js'
import ShoppingCartRoute from './shoppingCart.route.js'
import ClientPreferencesRoute from './clientProductsPreferences.route.js'
import deliveryStatusRoute from './deliveryStatus.route.js'

const router = express.Router()

router.use(
	'/',
	UserRouter,
	ProductRouter,
	RatingRouter,
	ShoppingCartRoute,
	ClientPreferencesRoute,
	deliveryStatusRoute
)

export default router
