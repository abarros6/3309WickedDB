const mysql = require('mysql2');

function newConnection()
{
    let conn = mysql.createConnection({
        host:'34.134.27.235',
        user: 'root',
        password:'mypassword',
        database:'usersDB'
    });
    return conn;
}
module.exports = newConnection;
