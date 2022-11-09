const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
		notes: [noteSchema],
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
	},
);

budgetSchema.statics.getBudget = function (userId) {
	return this.find({ user: userId });
};

module.exports = mongoose.model('Budget', budgetSchema);
