const Transaction = require('../../models/transaction');

module.exports = {
	createTransaction,
};

async function createTransaction(req, res) {
	try {
		const transaction = await Transaction.create(req.body);
		res.json(transaction);
	} catch (error) {
		res.status(400).json(error);
	}
}
