import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user_id: { type: String, unique: true, required: true },
  user_first_name: { type: String, required: true },
  user_last_name: { type: String, required: true },
  user_age: { type: Number, required: true },
  user_sex: {
    type: String,
    required: true,
    enum: ['Masculino', 'Feminino', 'Não Binário', 'Outro'],
  },
  user_email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        // Verifica o comprimento do e-mail
        return value.length >= 5 && value.length <= 255;
      },
      message: 'E-mail deve ter entre 5 e 255 caracteres',
    },
  },
  user_password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        // Verifica o comprimento da senha
        return value.length >= 8 && value.length <= 255;
      },
      message: 'Senha deve ter entre 8 e 255 caracteres',
    },
  },
  user_cpf: {
    type: Number,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        // Verifica o comprimento do CPF
        return value.toString().length === 11;
      },
      message: 'CPF deve ter 11 caracteres',
    },
  },
  user_adress: { type: String, required: true },
  user_cep: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        // Verifica o comprimento do CEP
        return value.toString().length === 8;
      },
      message: 'CEP deve ter 8 caracteres',
    },
  },
});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
