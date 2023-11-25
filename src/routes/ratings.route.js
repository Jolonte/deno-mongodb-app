import express from 'express'
import RatingController from '../controllers/ratings.controller.js'

const RatingRouter = express.Router()

RatingRouter
	.route('/ratings')
	.post((req, res) => RatingController.createRating(req, res))
	.get((req, res) => RatingController.getAllRatings(req, res))

RatingRouter
	.route('/ratings/:id')
	.get((req, res) => RatingController.getRatingById(req, res))
	.delete((req, res) => RatingController.deleteRatingById(req, res))
	.put((req, res) => RatingController.updateRatingById(req, res))

export default RatingRouter
