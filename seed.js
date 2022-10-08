require('dotenv').config();
require('./config/database');

const Category = require('./models/category');

const multiplier = (async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{
			name: 'Auto',
		},
		{
			name: 'Bills',
		},
		{
			name: 'Food/Dining',
		},

		{
			name: 'Home',
		},
		{
			name: 'Education',
		},
		{
			name: 'Personal Health',
		},
		{
			name: 'Travel',
		},
		{
			name: 'Entertainment',
		},
		{
			name: 'Kids',
		},
		{
			name: 'Pets',
		},
		{
			name: 'Savings',
		},
	]);
	categories.map((cat, idx) => (cat.sortOrder = multiplier * (idx + 1)));
	process.exit();
})();
