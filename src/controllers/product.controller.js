import ProductModel from '../models/product.model.js'

const ProductController = {
  createProduct: async (req, res) => {
    try {
      await ProductModel.create(req.body)
      console.log('Product created successfully.')
      res.status(201).json({ msg: 'Operation completed successfully!' })
    } catch (error) {
      console.error('Error creating product:', error.message)
      res.status(500).send(error.message)
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await ProductModel.find().lean()
      console.log('Retrieved all products successfully.')
      res.status(200).json({
        products,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error fetching all products:', error.message)
      res.status(500).send(error.message)
    }
  },

  getProductById: async (req, res) => {
    try {
      const id = req.params.id
      const product = await ProductModel.findByIdAndUpdate(id, req.body, {
        new: true,
      }).lean()

      if (!product) {
        console.log(`Product with ID ${id} not found for update.`)
        res.status(404).json({ msg: 'Product not found.' })
        return
      }

      console.log(`Updated product with ID ${id} successfully.`)
      res.status(200).json({
        product,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error updating product by ID:', error.message)
      res.status(500).send(error.message)
    }
  },

  deleteProductById: async (req, res) => {
    try {
      const id = req.params.id
      const product = await ProductModel.findByIdAndDelete(id)
      if (!product) {
        console.log(`Product with ID ${id} not found for deletion.`)
        res.status(404).send({ msg: 'Product not found.' })
        return
      }

      console.log(`Deleted product with ID ${id} successfully.`)
      res.status(200).json({
        product,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error deleting product by ID:', error.message)
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
        console.log(`Product with ID ${id} not found for update.`)
        res.status(404).send({ msg: 'Product not found.' })
        return
      }

      console.log(`Updated product with ID ${id} successfully.`)
      res.status(200).json({
        product,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error updating product by ID:', error.message)
      res.status(500).send(error.message)
    }
  },
}

export default ProductController
