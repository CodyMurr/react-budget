const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../../controllers/api/budgets');

router.get('/', budgetsCtrl.getAll);

router.post('/', budgetsCtrl.create);

module.exports = router;
