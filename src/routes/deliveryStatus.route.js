import express from 'express'
import DeliveryStatusController from '../controllers/deliveryStatus.controller.js'

const DeliveryStatusRoute = express.Router()

DeliveryStatusRoute
	.route('/deliverystatus')
	.post((req, res) => DeliveryStatusController.createDeliveryStatus(req, res))
	.get((req, res) => DeliveryStatusController.getAllDeliveryStatus(req, res))

DeliveryStatusRoute
	.route('/deliverystatus/:id')
	.get((req, res) => DeliveryStatusController.getDeliveryStatusById(req, res))
	.delete((req, res) => DeliveryStatusController.deleteDeliveryStatusById(req, res))
	.put((req, res) => DeliveryStatusController.updateDeliveryStatusById(req, res))

export default DeliveryStatusRoute
