const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')


var connection = require('./database/database')

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

//import routes from './routes.js/'

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
  connection.query(sql , (err, results, next) => {
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
  connection.query(sql , (err, results, next) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la requête à la base de données');
      return next(err);
    }
    res.send(results);
    //res.send('Hello ');
  });
})



/*
// ADD the 4 lines over there
const clientBuildPath = join(dirname(fileURLToPath(import.meta.url)), '../client/dist')
app.use(express.static(clientBuildPath))

// GET request handler for all other URLs that returns index.html of Vue single-page application
const indexPath = join(clientBuildPath, 'index.html')
app.get('*', (req, res) => res.sendFile(indexPath))
*/
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