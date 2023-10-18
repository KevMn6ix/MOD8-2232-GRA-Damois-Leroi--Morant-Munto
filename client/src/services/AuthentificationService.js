import Api from "./Api"

export default {
    async register (creditentials) {
        return await Api().post('register', creditentials)
    },

    async login(creditentials) {
        return await Api().post('login', creditentials)
    }
}

// AuthentificationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
//  })