import mongoose from 'mongoose'

const deliveryStatusSchema = new mongoose.Schema({
	delivery_id: String,
	purshace_id: String,
	delivery_status: String,
	delivery_tracking_number: Number,
})

const DeliveryStatusModel = mongoose.model(
	'deliveryStatus',
	deliveryStatusSchema,
)

export default DeliveryStatusModel
