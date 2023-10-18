const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
var connection = require('./database')

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

module.exports = {
    addPlace (req, res) {
        const name = req.body.name;
        const address = req.body.address;
        const photoUrl = req.body.photoUrl;
        const type = req.body.type;
        
        var sql = "INSERT INTO places (place_name, place_address, photo_url, place_type) VALUES (?,?,?,?)"
        connection.query(sql, [name, address, photoUrl, type],
            (err, result) => {
                console.log(err);
            }
        )
        res.send({
            message : `Thank you, ${req.body.name} have been successfully added !`
        })
    },
    findPlaces (req, res) {
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
    },
    findPlace (req, res) {
        const sql = 'SELECT * FROM places WHERE place_id = ?;'
        const id = req.params.id;
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
        )
    },
    findPlaceHygieneRating(req, res) {
        const sql = "SELECT avg(HygieneRating) FROM rating where idPlace = ?;"
        const id = req.params.id;
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        })
    },
    findPlaceAmbianceRating(req, res) {
        const sql = "SELECT avg(AmbianceRating) FROM rating where idPlace = ?;"
        const id = req.params.id;
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        })
    },
    findPlacePriceRating(req, res) {
        const sql = "SELECT avg(PriceRating) FROM rating where idPlace = ?;"
        const id = req.params.id;
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        })
    },
    findPlaceAverageRating(req, res) {
        const sql = "SELECT (avg(PriceRating) + avg(HygieneRating) + avg(AmbianceRating))/3 FROM rating where idPlace = ?;"
        const id = req.params.id;
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        })
    }
}

/* Place Example

{
    "id": "4",
    "name": "Portus 360",
    "address": "Evo Vieux Mtl",
    "photoUrl": "photoresto",
    "type": "Restaurant"
}

*/