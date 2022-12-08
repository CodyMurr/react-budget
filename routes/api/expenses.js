const express = require('express');
const router = express.Router();
const expensesCtrl = require('../../controllers/api/expenses');

router.post('/', expensesCtrl.createExpense);

module.exports = router;
