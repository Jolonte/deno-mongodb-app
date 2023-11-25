import express from 'express'
import UserRouter from './users.route.js'
import ProductRouter from './product.route.js'

const router = express.Router()

router.use('/', UserRouter)
router.use('/', ProductRouter)

export default router
