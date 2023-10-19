const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
/*
import express from 'express';
import cors from 'cors';
import logger from 'morgan';*/
var connection = require('./database')

const app = express()
app.use(logger('dev'))
app.use(express.json())
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
    findPlaces(req, res) {
        const sql = 'SELECT * FROM places';
        connection.query(sql, (err, results, next) => {
            if (err) {
                console.error(err);
                res.status(500).send('Erreur lors de la requête à la base de données');
                return next(err);
            }
            res.send(results);
            //console.log(results[0].place_name); Permet d'afficher le nom d'un resto
        });
    }
}
/*
const placeRepository = {
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
    findPlaces(req, res) {
        const sql = 'SELECT * FROM places';
        connection.query(sql, (err, results, next) => {
            if (err) {
                console.error(err);
                res.status(500).send('Erreur lors de la requête à la base de données');
                return next(err);
            }
            res.send(results);
            var pl = []
            for(let i = 0; i < results.length; i++){
                console.log(results[i].place_name);
                pl.push(results[i].place_name)
            }
            console.log(pl)
            //console.log(results[0].place_name); Permet d'afficher le nom d'un resto
            return pl;
        });
    }
}

export default placeRepository;*/

/* Place Example

{
    "id": "4",
    "name": "Portus 360",
    "address": "Evo Vieux Mtl",
    "photoUrl": "photoresto",
    "type": "Restaurant"
}

*/