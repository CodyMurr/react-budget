const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const expenseSchema = require('./expenseSchema');

const budgetSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		category: { type: Schema.Types.String, ref: 'Category' },
		amount: { type: String, required: true },
		expenses: [expenseSchema],
	},
	{
		timestamps: true,
	},
);

// budgetSchema.virtual('amount').get(function () {
// 	let totalAmt;
// 	if (expArr.length) {
// 		totalAmt = this.expenses.reduce((total, val) => total + val.amount, 0);
// 	} else {
// 		totalAmt = 0;
// 	}
// 	return totalAmt;
// });

budgetSchema.methods.addExpense = async function (expenseData) {
	const newExpense = await mongoose.model('Expense').create(expenseData);
	this.expenses.push({ newExpense });
	return this.save();
};

module.exports = mongoose.model('Budget', budgetSchema);
