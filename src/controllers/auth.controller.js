import UserModel from '../models/user.model.js'

const AuthController = {
	signInUser: async (req, res) => {
		try {
			const user = await UserModel.create(req.body)
			res.status(201).json({
				userId: user._id,
				msg: 'User created successfully!',
			})
		} catch (error) {
			console.error('Error in signInUser:', error)
			res.status(500).send(error.message)
		}
	},

	loginUserByEmailAndPassword: async (req, res) => {
		try {
			const { email } = req.body
			const user = await UserModel.findOne({ email })

			if (!user) {
				res.status(404).json('User not found.')
				return
			}

			// Uncomment this section if using bcrypt for password comparison
			// const auth = await bcrypt.compare(password, user.password);

			// if (auth) {
			//   await UserModel.findByIdAndUpdate(user, { auth: true }, { new: true });
			//   res.status(200).json({
			//     userId: user._id,
			//     msg: 'Operation successful.',
			//   });
			// } else {
			//   res.status(500).json({ msg: 'Incorrect password.' });
			// }

			await UserModel.findByIdAndUpdate(user, { auth: true }, {
				new: true,
			})
			res.status(200).json({
				userId: user._id,
				msg: 'Operation successful.',
			})
		} catch (error) {
			console.error('Error in loginUserByEmailAndPassword:', error)
			res.status(400).send(
				'Invalid request. Check your input and try again.',
			)
		}
	},

	logoutUserById: async (req, res) => {
		try {
			const id = req.body.id
			const user = await UserModel.findByIdAndUpdate(
				id,
				{ auth: false },
				{ new: true },
			)

			if (!user) {
				res.status(404).json('User not found.')
				return
			}

			res.status(200).json({
				userId: user._id,
				msg: 'Operation successful.',
			})
		} catch (error) {
			console.error('Error in logoutUserById:', error)
			res.status(500).send(error.message)
		}
	},
}

export default AuthController
