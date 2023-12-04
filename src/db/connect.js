import mongoose from 'mongoose'

const mongoConnect = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${Deno.env.get('DB_USER')}:${
				Deno.env.get('DB_PASSWORD')
			}@cluster0.wj63phh.mongodb.net/?retryWrites=true&w=majority`,
		)
		console.log(`MongoDB - Conexão bem sucedida.`)
	} catch (error) {
		console.error(`MongoDB - Conexão falhou: ${error.message}`)
	}
}

export default mongoConnect
