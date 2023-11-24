import mongoose from 'mongoose'

const deliveryStatusSchema = new mongoose.Schema({
	purchaseId: String,
	deliveryStatus: String,
	deliveryTrackingNumber: Number,
})

const DeliveryStatusModel = mongoose.model(
	'DeliveryStatus',
	deliveryStatusSchema,
)

export default DeliveryStatusModel
