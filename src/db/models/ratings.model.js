import mongoose from 'mongoose'

const ratingSchema = new mongoose.Schema({
	rating_id: String,
	user_id: String,
	prod_id: String,
	rating_number: Number,
	rating_comment: [
		{
			body: { type: String, required: true, maxlength: 128 },
			date: Date,
		},
	],
})

const RatingModel = mongoose.model('ratings', ratingSchema)

export default RatingModel
