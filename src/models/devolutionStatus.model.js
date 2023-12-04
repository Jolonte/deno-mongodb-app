import mongoose from 'mongoose'

const devolutionStatusSchema = new mongoose.Schema({
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
	devolutionStatus: {
		type: String,
		enum: ['Requested', 'Approved', 'Rejected', 'Completed'],
		default: 'Requested',
	},
	devolutionReason: {
		type: String,
		required: true,
	},
}, { timestamps: true })

const DevolutionStatusModel = mongoose.model(
	'DevolutionStatus',
	devolutionStatusSchema,
)

export default DevolutionStatusModel
