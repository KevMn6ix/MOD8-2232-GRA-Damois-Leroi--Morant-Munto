const mysql =  require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'mtl_student_spot_database',
    user: 'root',
<<<<<<< HEAD
    password:'root'
=======
    password:''
>>>>>>> bc75985c2bae5991c39c9941b4258ca0a84f728f
  
  })

module.exports = connection;