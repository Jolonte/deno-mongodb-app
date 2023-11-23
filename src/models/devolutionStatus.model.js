import mongoose from 'mongoose'

const devolutionSchema = new mongoose.Schema({
	devolutionId: String,
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
}, { timestamps: true })

const DevolutionModel = mongoose.model('Devolution', devolutionSchema)

export default DevolutionModel
