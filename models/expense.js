const mongoose = require('mongoose');

require('./category');
const expenseSchema = require('./expenseSchema');

module.exports = mongoose.model('Expense', expenseSchema);
