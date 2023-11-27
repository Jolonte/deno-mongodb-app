import express from "express"
import deliveryStatusController from '../controllers/deliveryStatus.controller.js'

const deliveryStatusRoute = express.Router()

deliveryStatusRoute
    .route('/deliverystatus')
    .post()
    .get()

deliveryStatusRoute
    .route('/deliverystatus/:id')
    .get()
    .delete()
    .put()

export default deliveryStatusRoute