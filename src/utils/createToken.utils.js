import { create, getNumericDate } from 'https://deno.land/x/djwt@v3.0.1/mod.ts'

const createToken = async (paramId) => {
	try {
		// Gerar a chave HMAC usando SHA-512
		const encoder = new TextEncoder()
		const key = await crypto.subtle.importKey(
			'raw',
			encoder.encode(Deno.env.get('JWT_TOKEN_SECRET')),
			{ name: 'HMAC', hash: 'SHA-512' },
			false,
			['sign', 'verify'],
		)

		// Obter a data atual em formato numérico para o payload
		const now = new Date()
		const exp = new Date(now)
		exp.setMinutes(now.getMinutes() + 60) // Token expira em 60 minutos

		// Criar o payload JWT
		const payload = {
			userId: paramId,
			exp: getNumericDate(exp),
		}

		// Criar o token JWT
		const token = await create({ alg: 'HS512', typ: 'JWT' }, payload, key)

		return token
	} catch (error) {
		console.error(`Erro ao criar token de autenticação: ${error.message}`)
	}
}

export default createToken
