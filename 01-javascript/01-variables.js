//01-javascript
//  01-variables.js
//MUTABLES E INMUTABLES

//Mutables: que se puede igualar y cambiar
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

//Inmutables
const confFiles = "pdf";
//Vamos a preferir CONST > LET > NUNCA VAR!
//Siempre buscamos que nuestras variables sean inmutables


//Tipos de variables
const numero = 1;
const sueldo = 1.2;
const texto = "Adrian";
const apellido= 'Erazo';
const booleano = false;
const hijos = null;
const usado = undefined; //Es lo mas usado, antes que null
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof usado);
console.log(typeof Number("asd")); //number
console.log( Number("asd")); //NaN - no es nu numero pero es de tipo number

//Truty Falsy
//Lo mas en comun en los lenguajes
if (true == true){
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

//Falsy
if (""){
    console.log("Es verdadero");
} else {
    console.log("Es falso"); //es falso
}

//Truty
if ("Lleno"){
    console.log("Es verdadero"); //es verdadero
} else {
    console.log("Es falso");
}

//Con numeros
//Truty
if (-1){
    console.log("Negativos es truty"); //es verdadero
} else {
    console.log("Negativos es falsy");
}

if (0){
    console.log("Cero es truty");
} else {
    console.log("Cero es falsy"); //es falso
}

if (1){
    console.log("Positivo es truty"); //es verdadero
} else {
    console.log("Positivo es falsy");
}

//NULL y Undefined
if (null){
    console.log("null es truty");
} else {
    console.log("null es falsy"); //es falso
}

if (undefined){
    console.log("undefined es truty");
} else {
    console.log("undefined es falsy"); //es falso
}


//Objetos (JSON) - Arreglos

const javier = {
    nombre: 'Javier',
    edad: 32,
    zapatos: undefined,
    ropa:{
        color: 'plomo',
        talla: 40
    },
    mascotas: ['gato', 'conejo']

}




