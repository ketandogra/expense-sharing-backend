// app/models/expenseParticipant.js
const mongoose = require('mongoose');

const expenseParticipantSchema = new mongoose.Schema({
  expense: { type: mongoose.Schema.Types.ObjectId, ref: 'Expense' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  shareAmount: Number,
});

module.exports = mongoose.model('ExpenseParticipant', expenseParticipantSchema);
