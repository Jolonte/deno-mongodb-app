import express from 'express'
import ClientPreferencesController from '../controllers/clientProductsPreferences.controller.js'

const ClientPreferencesRoute = express.Router()

ClientPreferencesRoute
	.route('/clientpreferences')
	.post()
	.get()

ClientPreferencesRoute
	.route('/clientpreferences/:id')
	.get()
	.delete()
	.put()

export default ClientPreferencesRoute
