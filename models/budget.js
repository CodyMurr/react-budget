const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		category: { type: Schema.Types.String, ref: 'Category' },
		amount: { type: String, required: true },
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

module.exports = mongoose.model('Budget', budgetSchema);
