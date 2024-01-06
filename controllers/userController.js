// app/controllers/userController.js
const User = require('../models/user');
const ExpenseParticipant = require('../models/expenseParticipant');

// Controller to create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, mobileNumber } = req.body;
    const user = await User.create({ name, email, mobileNumber });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get user details
exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
