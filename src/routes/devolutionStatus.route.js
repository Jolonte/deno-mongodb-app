import express from 'express'
import DevolutionStatusController from '../controllers/devolutionStatus.controller.js'

const DevolutionStatusRoute = express.Router()

DevolutionStatusRoute
	.route('/devolutionstatus/')
	.post()
	.get()

DevolutionStatusRoute
	.route('/devolutionstatus/:id')
	.get()
	.delete()
	.put()

export default DevolutionStatusRoute
