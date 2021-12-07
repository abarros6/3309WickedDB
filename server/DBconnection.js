const mysql = require('mysql2');

function newConnection()
{
    let conn = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password:'',
    database:'serverdb',
    port: '3306'
    });
    return conn;
}

module.exports = newConnection;
