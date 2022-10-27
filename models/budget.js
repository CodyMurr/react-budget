const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const expenseSchema = require('./expenseSchema');

const budgetSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		category: { type: Schema.Types.String, ref: 'Category' },
		frequency: { type: String },
		amount: { type: Number },
		expenses: [expenseSchema],
	},
	{
		timestamps: true,
	},
);

budgetSchema.virtual('totalSpent').get(function () {
	const paidExp = this.expenses
		.filter((exp) => exp.isPaid)
		.reduce((total, val) => (total += val), 0);
	return paidExp || '0';
});

budgetSchema.methods.addExpense = async function (expenseData) {
	const newExpense = await mongoose.model('Expense').create(expenseData);
	this.expenses.push({ newExpense });
	return this.save();
};

module.exports = mongoose.model('Budget', budgetSchema);
