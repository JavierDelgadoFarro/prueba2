//mostrar mensaje en terminal
//console.log('nodejs')

//se requiere la conexion
require('./config/conexion');

//se llama a la dependencia instalada y se configura el puerto donde va a correr

const express = require('express');
//recupera el puerto donde se está ejecutando, sino toma el puerto 3000
const port = (process.env.port || 3000)

//se llama a uns instancia de express, se guarda en la contante app
const app = express();

//tipos de datos admitidos

app.use(express.json())

//configurar el puerto
app.set('port',port)

//para trabajar con la ruta
app.use('/api',require('./rutas'))

//iniciar express
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('error al iniciar el servidor'+error)
    }
    else{
        console.log('servior iniciado en el puerto: '+port)
    }
})