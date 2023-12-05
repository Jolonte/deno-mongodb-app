import DevolutionStatusModel from '../models/devolutionStatus.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const DevolutionStatusController = {
  createDevolutionStatus: async (req, res) => {
    try {
      const { userId, productId } = req.body

      console.log(`Creating devolution status for user with ID ${userId} and product with ID ${productId}.`)

      const userExists = await UserModel.exists({ _id: userId })
      const productExists = await ProductModel.exists({ _id: productId })

      if (!userExists) {
        console.log(`User with ID ${userId} not found.`)
        return res.status(400).json({
          msg: 'User not found.',
        })
      } else if (!productExists) {
        console.log(`Product with ID ${productId} not found.`)
        return res.status(400).json({
          msg: 'Product not found.',
        })
      }

      await DevolutionStatusModel.create(req.body)

      console.log('Devolution status created successfully.')
      res.status(201).json({ msg: 'Operation completed successfully!' })
    } catch (error) {
      console.error('Error creating devolution status:', error.message)
      res.status(500).send(error.message)
    }
  },

  getAllDevolutionStatus: async (req, res) => {
    try {
      const devolutionStatus = await DevolutionStatusModel
        .find()
        .lean()
        .populate('userId productId')

      console.log('Retrieved all devolution status successfully.')
      res.status(200).json({
        devolutionStatus,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error fetching all devolution status:', error.message)
      res.status(500).send(error.message)
    }
  },

  getDevolutionStatusById: async (req, res) => {
    try {
      const id = req.params.id
      const devolutionStatus = await DevolutionStatusModel
        .findById(id)
        .populate('userId productId')
        .lean()

      if (!devolutionStatus) {
        console.log(`Devolution status with ID ${id} not found.`)
        res.status(404).json({
          msg: 'Devolution status not found.',
        })
        return
      }

      console.log(`Retrieved devolution status with ID ${id} successfully.`)
      res.status(200).json({
        devolutionStatus,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error fetching devolution status by ID:', error.message)
      res.status(500).send(error.message)
    }
  },

  deleteDevolutionStatusById: async (req, res) => {
    try {
      const id = req.params.id
      const devolutionStatus = await DevolutionStatusModel
        .findByIdAndDelete(id)

      if (!devolutionStatus) {
        console.log(`Devolution status with ID ${id} not found for deletion.`)
        res.status(404).json({
          msg: 'Devolution status not found.',
        })
        return
      }

      console.log(`Deleted devolution status with ID ${id} successfully.`)
      res.status(200).json({
        devolutionStatus,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error deleting devolution status by ID:', error.message)
      res.status(500).send(error.message)
    }
  },

  updateDevolutionStatusById: async (req, res) => {
    try {
      const id = req.params.id
      const { userId, productId } = req.body

      console.log(`Updating devolution status with ID ${id} for user with ID ${userId} and product with ID ${productId}.`)

      const userExists = await UserModel.exists({ _id: userId })
      const productExists = await ProductModel.exists({ _id: productId })

      if (!userExists) {
        console.log(`User with ID ${userId} not found.`)
        res.status(400).json({
          msg: 'User not found.',
        })
        return
      } else if (!productExists) {
        console.log(`Product with ID ${productId} not found.`)
        res.status(400).json({
          msg: 'Product not found.',
        })
        return
      }

      const devolutionStatus = await DevolutionStatusModel
        .findByIdAndUpdate(id, req.body, { new: true })
        .lean()

      if (!devolutionStatus) {
        console.log(`Devolution status with ID ${id} not found for update.`)
        res.status(404).json({
          msg: 'Devolution status not found.',
        })
        return
      }

      console.log(`Updated devolution status with ID ${id} successfully.`)
      res.status(200).json({
        devolutionStatus,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error updating devolution status by ID:', error.message)
      res.status(500).send(error.message)
    }
  },
}

export default DevolutionStatusController
