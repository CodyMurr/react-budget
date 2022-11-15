const Budget = require('../../models/budget');

module.exports = {
	getAll,
	create,
	deleteBudget,
};

async function deleteBudget(req, res) {
	try {
		const budget = await Budget.findById(req.params.id);
		await budget.delete();
		res.json(`Budget ${budget._id} Deleted.`);
	} catch (error) {
		res.status(400).json(error);
	}
}

async function getAll(req, res) {
	const budgets = await Budget.getBudget(req.user._id);

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
