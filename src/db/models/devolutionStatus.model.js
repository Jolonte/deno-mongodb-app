import mongoose from 'mongoose'

const devolutionSchema = new mongoose.Schema({
	devolution_id: String,
	user_id: String,
	devolution_reason: [
		{
			body: String,
			date: Date,
		},
	],
	devolutionStatus: String,
})

const DevolutionModel = mongoose.model('devolution', devolutionSchema)

export default DevolutionModel
