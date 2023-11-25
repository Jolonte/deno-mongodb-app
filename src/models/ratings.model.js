import mongoose from 'mongoose'

const ratingSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		required: true,
	},
	ratingNumber: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
	ratingComment: [
		{
			body: { type: String, required: true, maxlength: 128 },
			date: { type: Date, default: Date.now },
		},
	],
} , { timestamps: true })

ratingSchema.index({ userId: 1, productId: 1 })

const RatingModel = mongoose.model('Rating', ratingSchema)

export default RatingModel
