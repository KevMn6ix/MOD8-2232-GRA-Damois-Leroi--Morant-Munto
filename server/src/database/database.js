//import mysql from 'mysql2'
const mysql =  require('mysql')
/*
module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'root',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        options: {
            dialect : process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
            storage: './mtlstudentsport.sql'
        }
    }
}

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SCHEMA,
    waitForConnections: true,
    connectionLimit: 100,
    maxIdle: 100,
    idleTimeout: 10000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
}).promise()

*/

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'mtl_student_spot_database',
    user: 'root',
    password:'root'
  
  })


module.exports = connection;