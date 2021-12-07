const mysql = require('mysql2');

function newConnection()
{
    let conn = mysql.createConnection({
        host:'127.0.0.1',
        user: 'root',
        password:'',
        database:'wicked',
        port: '3306',
        multipleStatements: true,
        database: 'wicked'
    });
    return conn;
}

module.exports = newConnection;
