import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	user_id: String,
	user_first_name: { type: String, required: true },
	user_last_name: { type: String, required: true },
	user_age: { type: Number, required: true },
	user_sex: { type: String, required: true },
	user_email: { type: String, required: true },
	user_password: {
		type: String,
		maxlength: 32,
		minlength: 8,
		required: true,
	},
	user_cpf: { type: String, required: true },
	user_adress: String,
	user_cep: String,
})

const UserModel = mongoose.model('user', userSchema)

export default UserModel
