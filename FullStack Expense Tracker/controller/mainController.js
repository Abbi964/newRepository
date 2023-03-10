const path = require('path');
const Expense = require('../model/expense')

exports.loadMainPage = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'));
}

exports.addExpense = async(req,res,next)=>{
    const amount = req.body.amount
    const category = req.body.category
    const discription = req.body.discription
    let expense = await Expense.create({
        amount: amount,
        category: category,
        discription: discription,
    })
    res.json(expense.id)
}

exports.deleteExpense = (req,res,next)=>{
    let expenseId  = req.params.expenseId;
    Expense.findByPk(expenseId)
        .then(expense=>{
            expense.destroy()
            res.json('expense deleted')
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.editExpense = (req,res,next)=>{
    let expenseId = req.params.expenseId;
    Expense.findByPk(expenseId)
        .then(expense=>{
            res.json(expense)
        })
        .catch(err=>console.log(err))
}

exports.getExpenseList = (req,res,next)=>{
    Expense.findAll()
        .then(list=>{
            res.json(list)
        })
        .catch(err=>console.log(err))
}

exports.modifyExpense = (req,res,next)=>{
    Expense.update({
        amount: req.body.amount,
        category: req.body.category,
        discription: req.body.discription
    },
    {
        where:{id: req.body.id}
    })
    res.json('expense Modified')
}