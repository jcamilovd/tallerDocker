const User = require ('../models/user');
const { conexion } = require('../database/conexion');

const createUser = async (req, res) =>{
    try{
        const { nombre,apellido, password, identificacion, email } = req.body;
        const userData =  new User({ nombre,apellido, password, identificacion, email });
        const inserQuery = 'INSERT INTO usuarios SET ?';

        conexion.query(inserQuery, userData, (err, results) => {
            console.log('insertada correctamente');

            res.json({
                userData
            });
        })
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    createUser
}