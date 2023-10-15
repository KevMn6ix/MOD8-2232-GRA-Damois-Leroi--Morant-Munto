const {User} = require('../models/User')

module.exports = {
    register (req, res) {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        

        /*
        try {
            const user = await User.create(req.body)
            res.send({
                message : 'the user have been registered'
            })
        }
        catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }*/
        /*res.send({
            message: `Hello ${req.body.email}! your user was registeres! Have fun!`
        })*/

        /*
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
            // email already exist
        }*/
    }
}