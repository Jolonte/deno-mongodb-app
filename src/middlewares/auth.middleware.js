import { verify } from "https://deno.land/x/djwt@v3.0.1/mod.ts";

const authRoute = async (req, res, next) => {
	const token = req.cookies.jwt

	if (token) {
		try {
			const decodedToken = await verify(
				token,
				Deno.env.get('JWT_TOKEN_SECRET'),
				'HS256',
			)
			console.log(decodedToken)
			next()
		} catch (error) {
			console.log(error.message)
			res.redirect('/login')
		}
	} else {
		res.redirect('/login')
	}
}

export default authRoute
