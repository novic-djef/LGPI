const express = require("express");
const bodyParse = require("body-parser");
const dbConnection = require("./connexion/db");

const path = require("path");

const cors = require("cors");





dbConnection.authenticate()
.then(() =>{
    console.log("connexion a labase de donner reussi");
}).catch((err)=> console.error("echec de connection a la base de donnée", err))


const app = express();

 app.use(cors());
 //use public folder to serve web page

 app.use(express.static(path.join(__dirname, "public")))

 //parce application/json & form-urlencoded


 app.use(bodyParse.json())

 app.use(bodyParse.urlencoded({
    extended:true
 }))

//API Routes

app.use("/api/user", require("./api/user"));

app.get("/*",(req,res) => res.sendFile(path.join(__dirname, "public/index.html")))

app.listen(process.eventNames.PORT || 3000, () =>
    console.log('serveur activé avec success')
)