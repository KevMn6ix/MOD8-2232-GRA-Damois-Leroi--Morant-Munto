const AuthController = require('./controllers/AuthController')
const placesRepository = require('./database/placesRepository')
const functionRating = require('./database/palcesRatingRepository')

module.exports = (app) => {
    app.post('/register', AuthController.register)
    app.post('/login', AuthController.login)
    app.post('/place/add',placesRepository.addPlace)
    app.get('/review/:id', functionRating.findRating)
    app.post('/review/:id', functionRating.addRating)
    app.get('/places', placesRepository.findPlaces)
}