const Sequelize = require("../connexion/db")


const {DataTypes, Model} = require("sequelize")

class User extends Model{}

User.init({
    id: {type:Sequelize.INTEGER, unique:true, allowNull:false, primaryKey:true, autoIncrement:true },
    user_name: {type:Sequelize.STRING, allowNull:false,},
    password: {type:Sequelize.STRING, allowNull:false,},
    email: {type:Sequelize.STRING, allowNull:false},
}, {
    modelName: "user_table",
    Sequelize,
    tablName: "user_table",
    timestamps:false 
})