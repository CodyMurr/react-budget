require('dotenv').config();
require('./config/database');

const Category = require('./models/category');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Auto' },
		{ name: 'Bills' },
		{ name: 'Food/Dining' },
		{ name: 'Home' },
		{ name: 'Education' },
		{ name: 'Personal Health' },
		{ name: 'Travel' },
		{ name: 'Entertainment' },
		{ name: 'Kids' },
		{ name: 'Pets' },
		{ name: 'Savings' },
	]);
	console.log(categories);
	process.exit();
})();
