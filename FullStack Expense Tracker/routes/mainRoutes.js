const mainController = require('../controller/mainController')

const express = require('express');

const router = express.Router();

router.get('/',mainController.loadMainPage);

router.post('/add_expense',mainController.addExpense);

router.delete('/delete/:expenseId',mainController.deleteExpense);

router.get('/edit/:expenseId',mainController.editExpense);

router.get('/expenseList',mainController.getExpenseList);

router.put('/modifyExpense',mainController.modifyExpense);

module.exports = router;