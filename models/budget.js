const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema(
	{
		category: { type: Schema.Types.String, ref: 'Category' },
		amount: { type: Number, required: true },
		isPaid: { type: Boolean, default: false, required: true },
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
	},
);

const budgetSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		category: { type: Schema.Types.String, ref: 'Category' },
		amount: { type: String, required: true },
		expenses: [expenseSchema],
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
	},
);

budgetSchema.virtual('amountSpent').get(function () {
	const paidExpenses = this.expenses.filter((exp) => exp.isPaid);
	return paidExpenses.reduce((total, tr) => (total += tr.amount), 0);
});

budgetSchema.methods.addExpense = function (expData) {
	this.expenses.push(expData);
	return this.save();
};

module.exports = mongoose.model('Budget', budgetSchema);
