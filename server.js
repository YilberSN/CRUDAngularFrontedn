//Configuración para correr en heroku
//Instalación de express server
const express = require('express');
const path = require('path');

const app = express();

//Servidor solo para archivos del proyecto en la ruta
app.use(express.static(__dirname + '/angularapp'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});

//Iniciar la aplicación en el puerto
app.listen(process.env.PORT || 8080);