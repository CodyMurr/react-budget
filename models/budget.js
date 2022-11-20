const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionSchema = require('./transactionSchema');

const noteSchema = new Schema(
	{
		content: { type: String },
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
		notes: [noteSchema],
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
	},
);

budgetSchema.virtual('amountSpent').get(function () {
	return this.transactions.reduce((total, tr) => total + tr.amount, 0);
});

module.exports = mongoose.model('Budget', budgetSchema);
