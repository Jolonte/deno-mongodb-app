import express from 'express'
import RatingController from '../controllers/ratings.controller.js'

const RatingRouter = express.Router()

RatingRouter
	.route('/ratings')
	.post((req, res) => RatingController.createRating(req, res))

RatingRouter
	.route('/ratings/:id')

export default RatingRouter
