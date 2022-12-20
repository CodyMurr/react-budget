const Budget = require('../../models/budget');

module.exports = {
	getAll,
	show,
	create,
	deleteBudget,
	updateBudget,
	addTransaction,
	showTransactions,
};

async function showTransactions(req, res) {
	const budget = await Budget.findById(req.params.id);
	res.json(budget.transactions);
}

async function addTransaction(req, res) {
	try {
		const budget = await Budget.findById(req.params.id);
		const transactions = budget.transactions;
		transactions.push(req.body);
		await budget.save();
		res.json(transactions);
	} catch (error) {
		res.status(400).json(error);
	}
}

async function updateBudget(req, res) {
	try {
		const budget = await Budget.findByIdAndUpdate(req.params.id, {
			amount: req.body.amount,
		});
		res.json(budget);
	} catch (error) {
		res.status(400).json(error);
	}
}

async function deleteBudget(req, res) {
	try {
		const budget = await Budget.findById(req.params.id);
		await budget.delete();
		res.json(`Budget ${budget._id} Deleted.`);
	} catch (error) {
		res.status(400).json(error);
	}
}

async function show(req, res) {
	try {
		const budget = await Budget.findById(req.params.id);

		res.json(budget);
	} catch (error) {
		res.status(400).json(error);
	}
}

async function getAll(req, res) {
	const budgets = await Budget.find({ user: req.user._id })
		.populate('transactions')
		.exec();
	res.json(budgets);
}

async function create(req, res) {
	req.body.user = req.user._id;

	try {
		const budget = await Budget.create(req.body);
		res.json(budget);
	} catch (error) {
		res.status(400).json(error);
	}
}
