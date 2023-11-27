import express from 'express'
import DevolutionStatusController from '../controllers/devolutionStatus.controller.js'

const DevolutionStatusRoute = express.Router()

DevolutionStatusRoute
	.route('/devolutionstatus')
	.post((req, res) => DevolutionStatusController.createDevolutionStatus(req, res))
	.get((req, res) => DevolutionStatusController.getAllDevolutionStatus(req, res))

DevolutionStatusRoute
	.route('/devolutionstatus/:id')
	.get((req, res) => DevolutionStatusController.getDevolutionStatusById(req, res))
	.delete((req, res) =>
		DevolutionStatusController.deleteDevolutionStatusById(req, res)
	)
	.put((req, res) =>
		DevolutionStatusController.updateDevolutionStatusById(req, res)
	)

export default DevolutionStatusRoute
