import DeliveryStatusModel from '../models/deliveryStatus.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const DeliveryStatusController = {
  createDeliveryStatus: async (req, res) => {
    try {
      const { userId, productId } = req.body

      console.log(`Creating delivery status for user with ID ${userId} and product with ID ${productId}.`)

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

      await DeliveryStatusModel.create(req.body)

      console.log('Delivery status created successfully.')
      res.status(201).json({ msg: 'Operation completed successfully!' })
    } catch (error) {
      console.error('Error creating delivery status:', error.message)
      res.status(500).send(error.message)
    }
  },

  getAllDeliveryStatus: async (req, res) => {
    try {
      const deliveryStatus = await DeliveryStatusModel
        .find()
        .lean()
        .populate('userId productId')

      console.log('Retrieved all delivery status successfully.')
      res.status(200).json({
        deliveryStatus,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error fetching all delivery status:', error.message)
      res.status(500).send(error.message)
    }
  },

  getDeliveryStatusById: async (req, res) => {
    try {
      const id = req.params.id
      const deliveryStatus = await DeliveryStatusModel
        .findById(id)
        .lean()
        .populate('userId productId')

      if (!deliveryStatus) {
        console.log(`Delivery status with ID ${id} not found.`)
        res.status(404).json({
          msg: 'Delivery status not found.',
        })
        return
      }

      console.log(`Retrieved delivery status with ID ${id} successfully.`)
      res.status(200).json({
        deliveryStatus,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error fetching delivery status by ID:', error.message)
      res.status(500).send(error.message)
    }
  },

  deleteDeliveryStatusById: async (req, res) => {
    try {
      const id = req.params.id
      const deliveryStatus = await DeliveryStatusModel.findByIdAndDelete(
        id,
      )

      if (!deliveryStatus) {
        console.log(`Delivery status with ID ${id} not found for deletion.`)
        res.status(404).json({
          msg: 'Delivery status not found.',
        })
        return
      }

      console.log(`Deleted delivery status with ID ${id} successfully.`)
      res.status(200).json({
        deliveryStatus,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error deleting delivery status by ID:', error.message)
      res.status(500).send(error.message)
    }
  },

  updateDeliveryStatusById: async (req, res) => {
    try {
      const id = req.params.id
      const { userId, productId } = req.body

      console.log(`Updating delivery status with ID ${id} for user with ID ${userId} and product with ID ${productId}.`)

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

      const deliveryStatus = await DeliveryStatusModel
        .findByIdAndUpdate(id, req.body, { new: true })
        .lean()

      if (!deliveryStatus) {
        console.log(`Delivery status with ID ${id} not found for update.`)
        res.status(404).json({
          msg: 'Delivery status not found.',
        })
        return
      }

      console.log(`Updated delivery status with ID ${id} successfully.`)
      res.status(200).json({
        deliveryStatus,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error updating delivery status by ID:', error.message)
      res.status(500).send(error.message)
    }
  },
}

export default DeliveryStatusController
