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

budgetSchema.virtual('remainingAmt').get(function () {
	const initial = this.amount;
	const paidExp = this.expenses
		.filter((exp) => exp.isPaid)
		.reduce((total, val) => (total += val), 0);
	return initial - paidExp || initial;
});

budgetSchema.methods.addExpense = async function (expenseId) {
	const newExpense = await mongoose.model('Expense').findById(expenseId);
	this.expenses.push({ newExpense });
	return this.save();
};

module.exports = mongoose.model('Budget', budgetSchema);
