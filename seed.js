require('dotenv').config();
require('./config/database');

const Category = require('./models/category');

(async function () {
	await Category.deleteMany({});
	await Category.create([
		{
			name: 'Auto',
			subcategories: [
				{ name: 'Auto Insurance' },
				{ name: 'Vehicle Payment' },
				{ name: 'Fuel' },
				{ name: 'Parking' },
				{ name: 'Public Transportation' },
				{ name: 'Maintenance' },
			],
		},
		{
			name: 'Bills',
			subcategories: [
				{ name: 'Water' },
				{ name: 'Electric' },
				{ name: 'Natural Gas' },
				{ name: 'Internet' },
				{ name: 'Landline' },
				{ name: 'Cellphone' },
				{ name: 'Cable/Streaming' },
			],
		},
		{
			name: 'Food/Dining',
			subcategories: [
				{ name: 'Groceries' },
				{ name: 'Restaurants' },
				{ name: 'Delivery' },
				{ name: 'Fast Food' },
			],
		},
		{
			name: 'Home',
			subcategories: [
				{ name: 'Home Insurance' },
				{ name: 'Mortgage/Rent' },
				{ name: 'Furnishings' },
				{ name: 'Home Improvement' },
			],
		},
		{
			name: 'Education',
			subcategories: [
				{ name: 'Books/Supplies' },
				{ name: 'Student Loans' },
				{ name: 'Tuition/Board' },
			],
		},
		{
			name: 'Personal Health',
			subcategories: [
				{ name: 'Doctor' },
				{ name: 'Dentist' },
				{ name: 'Eyecare' },
				{ name: 'Haircare' },
				{ name: 'Skincare' },
				{ name: 'Health Insurance' },
				{ name: 'Fitness' },
			],
		},
		{
			name: 'Travel',
			subcategories: [
				{ name: 'Airline Tickets' },
				{ name: 'Hotels' },
				{ name: 'Rentals' },
			],
		},
		{
			name: 'Entertainment',
			subcategories: [
				{ name: 'Hobbies' },
				{ name: 'Movies' },
				{ name: 'Sporting Events' },
			],
		},
		{
			name: 'Kids',
			subcategories: [
				{ name: 'Allowance' },
				{ name: 'Clothes' },
				{ name: 'School Supplies' },
				{ name: 'Babysitter' },
				{ name: 'Toys' },
			],
		},
		{
			name: 'Pets',
			subcategories: [
				{ name: 'Food' },
				{ name: 'Vet Visits' },
				{ name: 'Petsitter' },
				{ name: 'Toys' },
			],
		},
		{
			name: 'Savings',
			subcategories: [
				{ name: 'Emergency Fund' },
				{ name: 'Goal' },
				{ name: 'Trust Fund' },
				{ name: '401K' },
			],
		},
	]);
	process.exit();
})();
