import 'https://deno.land/std@0.207.0/dotenv/load.ts'
import mongoConnect from './db/connect.js'
import router from './routes/router.js'
import express from 'express'

const app = express()
const PORT = 3000

// Routes
app.use(express.json())
app.use(router)
;(async () => {
	try {
		await mongoConnect()
		app.listen(PORT, () => {
			console.log(`Servidor rodando em http://localhost:${PORT}.`)
		})
	} catch (error) {
		console.log(`Erro ao iniciar servidor ${error.message}`)
	}
})()
