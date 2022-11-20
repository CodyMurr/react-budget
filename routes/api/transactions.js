const express = require('express');
const router = express.Router();
const transactionsCtrl = require('../../controllers/api/transactions');

router.post('/', transactionsCtrl.createTransaction);

module.exports = router;
