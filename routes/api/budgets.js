const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../../controllers/api/budgets');

router.post('/', budgetsCtrl.create);

router.get('/', budgetsCtrl.getAll);

module.exports = router;
