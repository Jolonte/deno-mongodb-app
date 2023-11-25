import ProductModel from '../models/product.model.js'

const productController = {
	createProduct: async (req, res) => {
		try {
			await ProductModel.create(req.body)
			res.status(201).json({ msg: 'Operação concluída com sucesso!' })
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getAllProducts: async (req, res) => {
		try {
			const products = await ProductModel.find()
			if (!products) {
				res.status(404).json({
					msg: 'Não existem produtos cadastrados.',
				})
				return
			}
			res.status(200).json({
				products,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	getProductById: async (req, res) => {
		try {
			const id = req.params.id
			const product = await ProductModel.findByIdAndUpdate(id, req.body, {
				new: true,
			})
			if (!product) {
				res.status(404).json({ msg: 'Produto não encontrado.' })
			}
			res.status(200).json({
				product,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	deleteProductById: async (req, res) => {
		try {
			const id = req.params.id
			const product = await ProductModel.findByIdAndDelete(id)
			if (!product) {
				res.status(404).send({ msg: 'Produto não encontrado.' })
			}
			res.status(200).json({
				product,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},

	updateProductById: async (req, res) => {
		try {
			const id = req.params.id
			const product = await ProductModel.findByIdAndUpdate(id, req.body, {
				new: true,
			})
			if (!product) {
				res.status(404).send({ msg: 'Produto não encontrado.' })
			}
			res.status(200).json({
				product,
				msg: 'Operação concluída com sucesso!',
			})
		} catch (error) {
			res.status(500).send(error.message)
		}
	},
}

export default productController
