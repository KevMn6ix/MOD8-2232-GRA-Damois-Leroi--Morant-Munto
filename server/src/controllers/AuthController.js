const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
var connection = require('../database/database')
const { type } = require('@testing-library/user-event/dist/type')


const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

module.exports = {

    // Register
    register  (req, res) {
        const user_id = req.body.user_id;
        const last_name = req.body.last_name;
        const first_name = req.body.first_name;
        const email = req.body.email;
        const phone_number = req.body.phone_number;
        const password = req.body.password;
        //const confirmPassword = req.body.confirmPassword;
        let id = 0
        var sql = "INSERT INTO users (last_name, first_name, email, phone_number, password) VALUES (?,?,?,?,?)"
        connection.query(sql, [last_name, first_name, email, phone_number, password],
          (err, result) => {
            console.log(err);
          }
        )
        res.send({
            message: `Hello ${last_name}! your user was registeres! Have fun!`
        })
    },

    // Login
    login (req, res) {
        const email = req.body.email
        const password = req.body.password
  
        var sql = "SELECT * FROM users WHERE email = ? AND password = ?"
        connection.query(sql, [email, password],
            (err, result) => {
                if(err) {
                    res.send({err : err})
                }
  
            if(result.length > 0) {
                res.send({message : "connected"})
            } else {
                res.send({message: "Wrong username/password combination !"})
            }
            }
        );
    }
}


/*
HELPERS 

Register : 
{
    "user_id": "4",
    "last_name": "Toto",
    "first_name": "toto",
    "email": "toto@gmail.com",
    "phone_number": "0612345678",
    "password": "toto123456",
}

Login: 

Good Login
{
    "email": "muntokevin@gmail.com",
    "password": "azerty12"
}

Output : Connected

Bad Login

{
    "email": "muntokevin@gmail.com",
    "password": "aaaaa12"
}

Output : Wrong username/password combination !
*/