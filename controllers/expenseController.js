// app/controllers/expenseController.js
const Expense = require('../models/expense');
const ExpenseParticipant = require('../models/expenseParticipant');

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { payer, amount, type, expenseName, participants } = req.body;
    
    // Create expense
    const newExpense = new Expense({ payer, amount, type, expenseName });
    const savedExpense = await newExpense.save();

    // Create expense participants
    const participantsData = participants.map(participant => ({
      expense: savedExpense._id,
      user: participant.userId,
      shareAmount: participant.shareAmount,
    }));
    await ExpenseParticipant.insertMany(participantsData);

    res.status(201).json(savedExpense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get expense by ID
exports.getExpenseById = async (req, res) => {
  try {
    const expenseId = req.params.expenseId;
    const expense = await Expense.findById(expenseId);
    
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.status(200).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
