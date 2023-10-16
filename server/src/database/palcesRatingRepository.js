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
    findRating (req, res) {
        const idPlace = req.body.idPlace;

        var sql = "SELECT * FROM rating WHERE idPlace = ?"
        connection.query(sql, [idPlace],
            (err, result) => {
                console.log(err);
            }
        )
        res.send(res.result);
    },
    addRating (req, res) {
        const id = req.body.id;
        const IdPlace = req.body.IdPlace;
        const hygieneRating = req.body.hygieneRating;
        const ambianceRating = req.body.ambianceRating;
        const priceRating = req.body.priceRating;
        const commentary = req.body.commentary;

        var sql = "INSERT INTO rating (id, place_id, CommentRate, HygieneRating, AmbianceRating, PriceRating) VALUES (?,?,?,?,?,?)"
        connection.query(sql, [id, IdPlace, commentary, hygieneRating,  ambianceRating, priceRating],
            (err, result) => {
                console.log(err);
            }
        )
        res.send({
            message : `Thank you, ${req.body.id} have been successfully added !`
        })
    },
}