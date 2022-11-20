const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
	{
		budget: { type: Schema.Types.ObjectId, ref: 'Budget' },
		category: { type: Schema.Types.String, ref: 'Category' },
		amount: { type: Number, required: true },
		payee: { type: String },
	},
	{
		timestamps: true,
	},
);

module.exports = transactionSchema;
