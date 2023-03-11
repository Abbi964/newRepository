const {Sequelize} = require('sequelize');

// Sequelize is a class here

const sequelize = new Sequelize('node-complete','root','Abhinav@123',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize