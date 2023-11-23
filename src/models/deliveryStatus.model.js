import mongoose from 'mongoose'

const deliveryStatusSchema = new mongoose.Schema({
	deliveryId: String,
	purchaseId: String,
	deliveryStatus: String,
	deliveryTrackingNumber: Number,
}, { timestamps: true })

const DeliveryStatusModel = mongoose.model(
	'DeliveryStatus',
	deliveryStatusSchema,
)

export default DeliveryStatusModel
