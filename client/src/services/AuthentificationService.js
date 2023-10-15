import Api from "./Api"

export default {
    register (creditentials) {
        return Api().post('register', creditentials)
    }
}

// AuthentificationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
//  })