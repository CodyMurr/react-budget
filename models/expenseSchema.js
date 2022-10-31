const Schema = require('mongoose').Schema;

const expenseSchema = new Schema(
	{
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		amount: { type: Number, required: true },
		frequency: { type: String },
		payee: { type: String, required: true },
		isPaid: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	},
);

module.exports = expenseSchema;
