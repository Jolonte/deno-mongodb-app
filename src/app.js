import 'https://deno.land/std@0.207.0/dotenv/load.ts' // .env
import mongoConnect from './db/connect.js' // BD connection
import express from 'express'
import router from './routes/router.js'

const app = express()
const PORT = Deno.env.get('SERVER_PORT')

// MongoDB connection
await mongoConnect()

// Routes
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
	console.log(`Servidor - rodando em http://localhost:${PORT}.`)
})
