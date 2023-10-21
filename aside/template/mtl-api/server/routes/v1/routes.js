const AuthController = require('../../middleware/AuthController')
const placesRepository = require('./palcesRatingRepository')
const functionRating = require('./palcesRatingRepository')
const placeManager = require('./placeManager')


module.exports = (app) => {
    app.post('/register', AuthController.register)
    app.post('/login', AuthController.login)
    app.get('/review/:id', functionRating.findRating)
    app.post('/review/:id', functionRating.addRating)
    app.get('/places/search', placeManager.searchPlace )
    //app.post('/adder', placeManager.findPlace)
    app.get('/places', placeManager.findPlaces)
    
    app.post('/places/add',placeManager.addPlace)
    app.get('/places/:id', placeManager.findPlace)
    app.get('/places/:id/ambiance', placeManager.findPlaceAmbianceRating)
    app.get('/places/:id/price', placeManager.findPlacePriceRating)
    app.get('/places/:id/hygiene', placeManager.findPlaceHygieneRating)
    app.get('/places/:id/average', placeManager.findPlaceAverageRating)
    app.get('/places/:id/all', placeManager.findPlaceAllRating)
    app.get('/type/:type',placeManager.displayType)
}
