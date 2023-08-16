const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { conexion } = require('./conexion/conexion');
const app = express();


app.use(bodyParser.json());

const secretKey = 'Q2xhdmVTZWNyZXRhQVBJSldUQWRtaW5x';


// Ruta de autenticación
app.post('/token', (req, res) => {

  let sql = "select id_usuario, email, password from usuario where email = '" + req.body.mail + "'";
  console.log(sql);

  conexion.query(sql, function (error, results, fields) {
    if (error)
      throw error;

    results.forEach(result => {
      
      
      console.log(result.email);
      const { id: sub, name } = { id: result.id_usuario, name: result.email }

      const token = jwt.sign({
        sub,
        name,
        exp: Date.now() + 60 * 100
      }, secretKey);
      res.send({ token });
    });
  });
});

// Ruta protegida
app.get('/protected', (req, res) => {
  // Verifica el token antes de permitir el acceso a esta ruta
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('Error al verificar el token:', err);
      return res.status(403).json({ message: 'Token inválido' });
    }
    // El token es válido, puedes permitir el acceso
    res.json({ message: 'Ruta protegida accesible', user: decoded });
  });
});


app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});