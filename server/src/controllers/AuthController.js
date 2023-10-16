const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
var connection = require('../database/database')


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
      
        var sql = "INSERT INTO user (user_id, last_name, first_name, email, phone_number, password) VALUES (?,?,?,?,?,?)"
        connection.query(sql, [user_id, last_name, first_name, email, phone_number, password],
          (err, result) => {
            console.log(err);
          }
        )
        res.send({
            message: `Hello ${req.body.email}! your user was registeres! Have fun!`
        })
    },

    // Login
    login (req, res) {
        const email = req.body.email
        const password = req.body.password
  
        var sql = "SELECT * FROM user WHERE email = ? AND password = ?"
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