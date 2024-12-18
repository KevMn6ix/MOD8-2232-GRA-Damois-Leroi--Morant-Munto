const AuthController = require('./controllers/AuthController')
const placesRepository = require('./database/placesRepository')
const functionRating = require('./database/palcesRatingRepository')

module.exports = (app) => {
    app.post('/register', AuthController.register)
    app.post('/login', AuthController.login)
    app.get('/review/:id', functionRating.findRating)
    app.post('/review/:id', functionRating.addRating)
    app.get('/places', placesRepository.findPlaces)
    app.get('/places/search', placesRepository.searchPlace)
    app.post('/places/add',placesRepository.addPlace)
    app.get('/places/:id', placesRepository.findPlace)
    app.get('/places/:id/ambiance', placesRepository.findPlaceAmbianceRating)
    app.get('/places/:id/price', placesRepository.findPlacePriceRating)
    app.get('/places/:id/hygiene', placesRepository.findPlaceHygieneRating)
    app.get('/places/:id/average', placesRepository.findPlaceAverageRating)
    app.get('/places/:id/all', placesRepository.findPlaceAllRating)
    app.get('/type/:type',placesRepository.displayType)
}
