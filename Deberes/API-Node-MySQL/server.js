const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const app = express();
const routes = require('./routes');

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'marcas_deber'
}

//middlewares 
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json()) //para que entienda los datos que le llega

//Colocamos la puerta como una propiedad de la app 
app.set('port', process.env.PORT || 9000);

//RUTAS
//Agregamos la ruta principar de la aplicacion 
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
})

app.use('/api', routes) //link al archivo de rutas




//server running 
app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto `, app.get('port'))
});
