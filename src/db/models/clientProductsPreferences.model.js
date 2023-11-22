import mongoose from 'mongoose'

const clientPreferencesSchema = new mongoose.Schema({
	client_preferences_id: String,
	user_id: String,
	client_preferences_itens: [
		{
			style: String,
			color: String,
		},
	],
})

const ClientPreferencesModel = new mongoose.model(
	'clientPreferences',
	clientPreferencesSchema,
)

export default ClientPreferencesModel
