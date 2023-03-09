const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bookingappointmant','root','Abhinav@123',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;