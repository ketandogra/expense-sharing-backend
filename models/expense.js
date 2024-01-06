// app/models/expense.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  payer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  type: String, // EQUAL, EXACT, PERCENT
  expenseName: String,
});

module.exports = mongoose.model('Expense', expenseSchema);
