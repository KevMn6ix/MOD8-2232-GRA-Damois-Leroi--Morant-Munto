const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const {sequelize} = require('./models')
//const config = require('./database/database')
const mysql = require('mysql')
var connection = require('./database/database')

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

//require('./routes')(app)


// Get all the user
app.get('/', (req, res, next) => {
  var sql = "SELECT * FROM user "
  connection.query(sql , (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la requête à la base de données');
      return next(err);
    }
    res.send(results);
    //res.send('Hello ');
  });
  
})

// Register page
app.post('/register', (req, res) => {
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
})

/*

Register informations
{
  "id": 4,
  "firstName": "Yann",
  "lastName": "Tran",
  "email": "yanntr@gmail.com",
  "phoneNumber": "0712345678",
  "password": "azerty12"
}
*/

// Login 
app.post('/login', (req, res) =>{
  const email = req.body.email
  const password = req.body.password

  var sql = "SELECT * FROM user WHERE email = ? AND password = ?"
  connection.query(sql, [email, password],
    (err, result) => {
      if(err) {
        res.send({err : err})
      }

      if(result) {
        res.send(result)
      } else {
        res.send({message: "Wrong username/password combination !"})
      }
    }
  );
})

/*
Login Information

{
  "email": "muntokevin@gmail.com"
  "password": "azerty12"
}


*/ 

/*sequelize.sync()
  .then(() => {

    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })*/

const port = 8081
//app.listen(process.env.PORT || 8081)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connection.connect((err) => {
    if(err) {
      console.log("[mysql error]",err);
      return;
    }
    
    console.log(`Database connected`)
  })
})