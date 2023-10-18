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
        const id = req.body.id;
        const name = req.body.name;
        const address = req.body.address;
        const photoUrl = req.body.photoUrl;
        const type = req.body.type;
        
        var sql = "INSERT INTO places (place_id, place_name, place_address, photo_url, place_type) VALUES (?,?,?,?,?)"
        connection.query(sql, [id, name, address, photoUrl, type],
            (err, result) => {
                console.log(err);
            }
        )
        res.send({
            message : `Thank you, ${req.body.name} have been successfully added !`
        })
    },
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