var mysql = require('mysql');

var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'indicador',
    user : 'root',
    password : '1094975931',
});

/*
conexion.connect(function(err) {
    let sql = "select email, password from usuario where email ='jpzh315@gmail.com'";
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
    conexion.query(sql, function (error, results, fields) {
        if (error)
            throw error;
    
        results.forEach(result => {
            console.log(result);
        });
    });

});
*/

module.exports = {conexion}