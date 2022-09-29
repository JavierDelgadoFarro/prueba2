//rutas del sistema
// se requiere el express de router
const router = require('express').Router()

//se requiere acceso a la conexion
const conexion = require('./config/conexion');

/*-ruta principal con entrada y salida
/rutas.get('/', function(req, res){
    res.send('ruta de inicio')
});*/

//------------------RUTAS-----------------------------
/*ruta para retornar equipos*/
router.get('/',(req,res)=>{
    //se crea una variable para sentencia sql
    let sql = 'select * from tb_equipo'
    //se puede tener 3 respuestas
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
/*ruta para seleccionar un elemento*/
router.get('/:id',(req,res)=>{
    //se crea una constante para retornar el id
    const {id} = req.params
    let sql = 'select * from tb_equipo where id_equipo=?'
    //se puede tener 3 respuestas
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
/*ruta para agregar un equipo*/
router.post('/',(req,res)=>{
    //las variables obtendrán el nombre desde body
   const{nombre,logo} = req.body
    //para asignar una variable a la sentencia se coloca: ${}
   let sql = `insert into tb_equipo(nombre,logo) values ('${nombre}', '${logo}')`
   conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
   })
})
/*ruta para eliminar un equipo */
router.delete('/:id',(req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_equipo where id_equipo = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
})
/*ruta para modificar un equipo*/
router.put('/:id', (req,res)=>{
    const {id} = req.params
    const{nombre,logo} = req.body
    let sql = `update tb_equipo set 
                nombre = '${nombre}',
                logo = '${logo}'
                where id_equipo = '${id}'` 
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'equipo actualizado'})
        }
    })
})

//----------------------------------------------------

//exportacion de rutas
module.exports= router;