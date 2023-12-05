import RatingModel from '../models/ratings.model.js'
import UserModel from '../models/user.model.js'
import ProductModel from '../models/product.model.js'

const RatingController = {
  addRating: async (req, res) => {
    try {
      const { userId, productId } = req.body

      console.log(`Adding rating for user with ID ${userId} and product with ID ${productId}.`)

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

      await RatingModel.create(req.body)

      console.log('Rating added successfully.')
      res.status(201).json({ msg: 'Operation completed successfully!' })
    } catch (error) {
      console.error('Error adding rating:', error.message)
      res.status(500).send(error.message)
    }
  },

  getAllRatings: async (req, res) => {
    try {
      const ratings = await RatingModel
        .find()
        .lean()
        .populate('userId productId')

      console.log('Retrieved all ratings successfully.')
      res.status(200).json({
        ratings,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error fetching all ratings:', error.message)
      res.status(500).send(error.message)
    }
  },

  getRatingById: async (req, res) => {
    try {
      const id = req.params.id
      const rating = await RatingModel
        .findById(id)
        .lean()
        .populate('userId productId')

      if (!rating) {
        console.log(`Rating with ID ${id} not found.`)
        res.status(404).json({
          msg: 'Rating not found.',
        })
        return
      }

      console.log(`Retrieved rating with ID ${id} successfully.`)
      res.status(200).json({
        rating,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error fetching rating by ID:', error.message)
      res.status(500).send(error.message)
    }
  },

  deleteRatingById: async (req, res) => {
    try {
      const id = req.params.id
      const rating = await RatingModel.findByIdAndDelete(id)

      if (!rating) {
        console.log(`Rating with ID ${id} not found for deletion.`)
        res.status(404).json({ msg: 'Rating not found.' })
        return
      }

      console.log(`Deleted rating with ID ${id} successfully.`)
      res.status(200).json({
        rating,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error deleting rating by ID:', error.message)
      res.status(500).send(error.message)
    }
  },

  updateRatingById: async (req, res) => {
    try {
      const id = req.params.id
      const { userId, productId } = req.body

      console.log(`Updating rating with ID ${id} for user with ID ${userId} and product with ID ${productId}.`)

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

      const rating = await RatingModel.findByIdAndUpdate(id, req.body, {
        new: true,
      })

      if (!rating) {
        console.log(`Rating with ID ${id} not found for update.`)
        res.status(404).json({ msg: 'Rating not found.' })
        return
      }

      console.log(`Updated rating with ID ${id} successfully.`)
      res.status(200).json({
        rating,
        msg: 'Operation completed successfully!',
      })
    } catch (error) {
      console.error('Error updating rating by ID:', error.message)
      res.status(500).send(error.message)
    }
  },
}

export default RatingController
