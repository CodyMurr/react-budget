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

module.exports = mongoose.model('Budget', budgetSchema);
