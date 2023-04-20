const express = require("express")

const router = express.Router();

const UserModel = require("../model/userModel");

const bcrypt = require("bcrypt");

const webTokent = require("jsonwebtoken");

require("dotenv").config()


//regiser API

router.post ("/register", (req, res) =>{
    const {username, password, email} = req.body;

    if(username == undefined || username == '' || password == undefined || password == '' || email == undefined || email == '') {
        res.status(401).json({
            message: "remplir tous les champs",
            sattus:res.statusCode
        });
    }else {
        //check the email whether
        UserModel.findOne({
            attributes: ["user_name"],
            where:{
                email
            }
        }).then((value)=>{
if(value === null){
    //Si aucune donnée n’a trouvé un nouvel enregistrement dans la base de données avec un mot de passe haché

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, (err, hash) => {
            //create record

            UserModel.create({
                user_name: username,
                email:email,
                password:hash
            }).then((value) =>{
                res.status(201).json({
                    message: "compte cree avec secces",
                    status:res.statusCode
                })
            }).catch(err => res.status(404).json({
                message: "une erreur c'est produite DSL"
            }))

        })
    })
}else {
    res.status(401).json({message:"Email deja utilisé", status:res.statusCode})
}
        })
    }
})

module.exports = router