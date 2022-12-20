const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
	{
		category: { type: Schema.Types.String, ref: 'Category' },
		amount: { type: Number, required: true },
		payee: { type: String },
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
		transactions: [transactionSchema],
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
	},
);

budgetSchema.virtual('amountSpent').get(function () {
	return this.transactions.reduce(
		(total, transaction) => total + transaction.amount,
		0,
	);
});

module.exports = mongoose.model('Budget', budgetSchema);
