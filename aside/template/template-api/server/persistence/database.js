const mysql =  require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'mtl_student_spot_database',
    user: 'root',
    password:''
   
  })

module.exports = connection;