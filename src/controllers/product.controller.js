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
}

export default productController
