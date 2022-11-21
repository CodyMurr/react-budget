const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema(
	{
		budget: { type: Schema.Types.ObjectId, ref: 'Budget' },
		category: { type: Schema.Types.String, ref: 'Category' },
		amount: { type: Number, required: true },
		isPaid: { type: Boolean, default: false, required: true },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Expense', expenseSchema);
