import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	userId: { type: String, unique: true, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	age: { type: Number, required: true },
	sex: {
		type: String,
		required: true,
		enum: ['Masculino', 'Feminino', 'Não Binário', 'Outro'],
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: (value) => value.length >= 5 && value.length <= 255,
			message: 'E-mail deve ter entre 5 e 255 caracteres',
		},
	},
	password: {
		type: String,
		required: true,
		validate: {
			validator: (value) => value.length >= 8 && value.length <= 255,
			message: 'Senha deve ter entre 8 e 255 caracteres',
		},
	},
	cpf: {
		type: Number,
		required: true,
		unique: true,
		validate: {
			validator: (value) => value.toString().length === 11,
			message: 'CPF deve ter 11 caracteres',
		},
	},
	address: { type: String, required: true },
	cep: {
		type: Number,
		required: true,
		validate: {
			validator: (value) => value.toString().length === 8,
			message: 'CEP deve ter 8 caracteres',
		},
	},
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
