import mongoose from 'mongoose'

const devolutionSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	productId: String,
	devolutionReason: [
		{
			body: String,
			date: { type: Date, default: Date.now },
		},
	],
	devolutionStatus: String,
})

const DevolutionModel = mongoose.model('Devolution', devolutionSchema)

export default DevolutionModel
