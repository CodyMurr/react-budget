const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../../controllers/api/budgets');

router.get('/', budgetsCtrl.getAll);

router.get('/:id', budgetsCtrl.show);

router.get('/:id/transactions', budgetsCtrl.show);

router.post('/', budgetsCtrl.create);

router.post('/:id/transactions/new', budgetsCtrl.addTransaction);

router.put('/:id', budgetsCtrl.updateBudget);

router.delete('/:id', budgetsCtrl.deleteBudget);

module.exports = router;
