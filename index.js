
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const userRoutes = require('./app/routes/userRoutes');
const expenseRoutes = require('./app/routes/expenseRoutes');
const weeklySummaryJob = require('./app/jobs/weeklySummaryJob');

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});