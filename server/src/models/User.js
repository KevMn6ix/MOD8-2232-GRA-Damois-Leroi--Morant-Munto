module.exports = (sequelize, DataTypes) => 
    sequelize.define('User', {
        /*lastName:
            DataTypes.STRING,
        firstName:
            DataTypes.STRING,*/
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        /*phoneNumber : {
            type: DataTypes.INTEGER,
            unique: true
        },*/
        password :
            DataTypes.STRING,
        /*confirmPassword : 
            DataTypes.STRING*/
    })

