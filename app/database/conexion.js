var mysql = require('mysql');

var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'microservicios',
    user : 'microservicios',
    password : '1094975931',
    insecureAuth: true
});

module.exports = {conexion}