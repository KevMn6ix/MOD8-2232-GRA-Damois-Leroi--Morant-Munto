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

require('./routes')(app)

// Get all the user
app.get('/', (req, res, next) => {
  var sql = "SELECT * FROM users "
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


//get the list of place
app.get('/places', (req, res) => {
  const sql = 'SELECT * FROM places';
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