const Expense = require('../../models/expense');
const Budget = require('../../models/budget');

module.exports = {
	createExpense,
};

async function createExpense(req, res) {
	const expense = await Expense.create(req.body);
	await expense.save();

	const budget = await Budget.findById(req.body.budget);

	budget.expenses.push(expense);
	await budget.save();
	res.json(budget.expenses);
}
