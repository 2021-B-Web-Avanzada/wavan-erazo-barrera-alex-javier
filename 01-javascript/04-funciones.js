//04-funciones.js

function soloNumeros(a,b,c){
    return a+b+c; //retorno
}
//JS nos permite mandar lo que queramos
//Es un gran problema que nos deje mandar lo que sea
soloNumeros('v', true, [1,2,3]);
soloNumeros(1,2,3,4,5,6)
soloNumeros();

function soloLetras(a,b,c){
    console.log(a+b+c); //retorna undefined
}