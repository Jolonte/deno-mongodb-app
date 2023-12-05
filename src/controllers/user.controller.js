import UserModel from '../models/user.model.js';

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      console.log('Retrieved all users successfully.');
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching all users:', error.message);
      res.status(500).json({ error: 'Internal Server Error: Unable to fetch all users' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);
      if (!user) {
        console.log(`User with id ${id} not found.`);
        res.status(404).json({ msg: 'User not found.' });
        return;
      }
      console.log(`Retrieved user with id ${id} successfully.`);
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user by id:', error.message);
      res.status(500).json({ error: 'Internal Server Error: Unable to fetch user by id' });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findByIdAndDelete(id);
      if (!user) {
        console.log(`User with id ${id} not found for deletion.`);
        res.status(404).json({ msg: 'User not found.' });
        return;
      }
      console.log(`Deleted user with id ${id} successfully.`);
      res.status(200).json({
        user,
        msg: 'Operation completed successfully!',
      });
    } catch (error) {
      console.error('Error deleting user by id:', error.message);
      res.status(500).json({ error: 'Internal Server Error: Unable to delete user by id' });
    }
  },

  updateUserById: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!user) {
        console.log(`User with id ${id} not found for update.`);
        res.status(404).json({ msg: 'User not found.' });
        return;
      }
      console.log(`Updated user with id ${id} successfully.`);
      res.status(200).json({
        user,
        msg: 'Operation completed successfully!',
      });
    } catch (error) {
      console.error('Error updating user by id:', error.message);
      res.status(500).json({ error: 'Internal Server Error: Unable to update user by id' });
    }
  },
};

export default UserController;
