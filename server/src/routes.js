const AuthController = require('./controllers/AuthController')
const placesRepository = require('./database/placesRepository')

module.exports = (app) => {
    app.post('/register', AuthController.register)
    app.post('/login', AuthController.login)
    app.post('/place/add',placesRepository.addPlace)
}