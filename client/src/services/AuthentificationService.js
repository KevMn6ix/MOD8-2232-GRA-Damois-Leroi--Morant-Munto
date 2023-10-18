import Api from "./Api"

export default {
    register (creditentials) {
        return Api().post('register', creditentials)
    },

    login(creditentials) {
        return Api().post('login', creditentials)
    }
}

// AuthentificationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
//  })