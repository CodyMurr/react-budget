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

module.exports = mongoose.model('Transaction', transactionSchema);
