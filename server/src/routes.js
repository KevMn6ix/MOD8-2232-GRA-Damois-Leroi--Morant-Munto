const AuthController = require('./controllers/AuthController')
const placesRepository = require('./database/placesRepository')
const functionRating = require('./database/palcesRatingRepository')

module.exports = (app) => {
    app.post('/register', AuthController.register)
    app.post('/login', AuthController.login)
    app.get('/review/:id', functionRating.findRating)
    app.post('/review/:id', functionRating.addRating)
<<<<<<< HEAD
    app.get('/places', placesRepository.findPlaces)
=======
    app.get('/place', placesRepository.findPlaces)
    app.get('/place/search', placesRepository.searchPlace)
    app.post('/place/add',placesRepository.addPlace)
    app.get('/place/:id', placesRepository.findPlace)
    app.get('/place/:id/ambiance', placesRepository.findPlaceAmbianceRating)
    app.get('/place/:id/price', placesRepository.findPlacePriceRating)
    app.get('/place/:id/hygiene', placesRepository.findPlaceHygieneRating)
    app.get('/place/:id/average', placesRepository.findPlaceAverageRating)
    app.get('/place/:id/all', placesRepository.findPlaceAllRating)
    app.get('/type/:type',placesRepository.displayType)
>>>>>>> bc75985c2bae5991c39c9941b4258ca0a84f728f
}