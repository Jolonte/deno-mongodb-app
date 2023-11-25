import express from 'express'
import UserRouter from './user.route.js'
import ProductRouter from './product.route.js'
import RatingRouter from './ratings.route.js'
import ShoppingCartRoute from './shoppingCart.route.js'

const router = express.Router()

router.use('/', UserRouter, ProductRouter, RatingRouter, ShoppingCartRoute)

export default router
