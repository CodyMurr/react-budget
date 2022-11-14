const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
	{
		budget: { type: Schema.Types.ObjectId, ref: 'Budget' },
		name: { type: String },
		amount: { type: Number, required: true },
		payee: { type: String },
	},
	{
		timestamps: true,
	},
);

module.exports = transactionSchema;
