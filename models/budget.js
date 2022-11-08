const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema(
	{
		category: { type: Schema.Types.String, ref: 'Category' },
		amount: { type: Number, required: true },
		payee: { type: String, required: true },
		isPaid: { type: Boolean, default: false },
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

budgetSchema.virtual('amtSpent').get(function () {
	return (
		this.expenses.reduce((total, expense) => total + expense.amount, 0) || 0
	);
});

budgetSchema.statics.getBudget = function (userId) {
	return this.find({ user: userId });
};

module.exports = mongoose.model('Budget', budgetSchema);
