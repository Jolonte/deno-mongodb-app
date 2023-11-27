import express from "express"
import DeliveryStatusController from '../controllers/deliveryStatus.controller.js'

const DeliveryStatusRoute = express.Router()

DeliveryStatusRoute
    .route('/deliverystatus')
    .post()
    .get()

DeliveryStatusRoute
    .route('/deliverystatus/:id')
    .get()
    .delete()
    .put()

export default DeliveryStatusRoute