import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema({
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
    deliveryStatus: {
        type: String,
        enum: ['Processing', 'Shipped', 'Delivered', 'Failed'],
        default: 'Processing',
    },
    deliveryTrackingNumber: {
        type: Number,
    },
}, { timestamps: true });

const DeliveryModel = mongoose.model('Delivery', deliverySchema);

export default DeliveryModel;
