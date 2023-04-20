const Sequelize = require("sequelize");



const sequelize = new Sequelize('parcinformatique','root','password', {
 host: 'localhost',
 dialect: 'mysql',
})

module.exports = sequelize