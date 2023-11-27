import express from 'express'
import ClientPreferencesController from '../controllers/clientProductsPreferences.controller.js'

const ClientPreferencesRoute = express.Router()

ClientPreferencesRoute
	.route('/clientpreferences')
	.post((req, res) => ClientPreferencesController.addToClientPreferences(req, res))
	.get((req, res) => ClientPreferencesController.getAllClientPreferences(req, res))

ClientPreferencesRoute
	.route('/clientpreferences/:id')
	.get((req, res) => ClientPreferencesController.getClientPreferencesById(req, res))
	.delete((req, res) => ClientPreferencesController.deleteClientPreferencesById(req, res))
	.put((req, res) => ClientPreferencesController.updateClientPreferencesById(req, res))

export default ClientPreferencesRoute
