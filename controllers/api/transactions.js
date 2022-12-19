const Transaction = require('../../models/transaction');

module.exports = {
	index,
};

async function index(req, res) {
	try {
		const transactions = Transaction.find({ user: req.user._id });
		res.json(transactions);
	} catch (error) {
		res.status(400).json(error);
	}
}
