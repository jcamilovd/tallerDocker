const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
    }
   
    routes(){
        this.app.use('/user', require('../routes/user.js'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor escuchando en el puerto ',this.port);
        });
    }
}
module.exports = Server;