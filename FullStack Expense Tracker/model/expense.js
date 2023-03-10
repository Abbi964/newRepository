const {Sequelize} = require('sequelize');
const sequelize = require('../utill/database');

const Expense = sequelize.define('expense',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    amount:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    discription: Sequelize.STRING,
});

module.exports = Expense;