import express from 'express'
import UserRouter from './users.route.js'
import ProductRouter from './product.route.js'
import RatingRouter from './ratings.route.js'

const router = express.Router()

router.use('/', UserRouter)
router.use('/', ProductRouter)
router.use('/', RatingRouter)

export default router
