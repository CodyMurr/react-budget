const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategorySchema = new Schema(
	{
		name: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

const categorySchema = new Schema(
	{
		name: { type: String, required: true },
		subcategories: [subcategorySchema],
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Category', categorySchema);
