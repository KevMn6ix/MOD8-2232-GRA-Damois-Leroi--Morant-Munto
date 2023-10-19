import Api from "./Api"

export default {
    async register (creditentials) {
        return await Api().post('register', creditentials)
    },

    async login(creditentials) {
        return await Api().post('login', creditentials)
    },

    async findPlaces (creditentials) {
        return await Api().get('places', creditentials)
    }
}

// AuthentificationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
//  })