import mongoose from 'mongoose'
import * as bcrypt from 'https://deno.land/x/bcrypt@v0.4.1/mod.ts'

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	age: {
		type: Number,
		required: true,
		validate: {
			validator: (value) => value >= 18,
			message: 'A idade mínima deve ser 18 anos.',
		},
	},
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
			validator: (value) =>
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
					.test(value),
			message:
				'Senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
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
}, { timestamps: true })

// Hash and salt passwords
userSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt()
	this.password = await bcrypt.hash(this.password, salt)
	next()
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
