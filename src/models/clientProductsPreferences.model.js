import mongoose from 'mongoose'

const clientPreferencesSchema = new mongoose.Schema({
	clientPreferencesId: String,
	userId: String,
	clientPreferencesItems: [
		{
			style: String,
			color: String,
		},
	],
})

const ClientPreferencesModel = mongoose.model(
	'ClientPreferences',
	clientPreferencesSchema,
)

export default ClientPreferencesModel
