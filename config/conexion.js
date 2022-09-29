//se crea una constante y se instancia con la dependencia instalada
const mysql = require('mysql');

//se crea una constante para pasarle los parámetros requeridos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_basico'
});

//para verificar si existe o no errores

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error: ' + err)
    }
    else{
        console.log('conexion exitosa')
    }
});

//para poder utilizar la conexion desde cualquier parte
module.exports = conexion;
