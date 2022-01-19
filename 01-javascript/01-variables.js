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


//PROPIEDADES DE UN OBJETO
// Acceder por llave o por punto
console.log(javier.edad);
console.log(javier["edad"]);

//Para modificar
javier.edad = 35;
javier["nombre"]= "Javiere"

console.log(javier.edad);
console.log(javier["nombre"]);

//NOTA: Nosotros podemos modificar las propiedades del objeto, pero no el general

//Clase Object
console.log(Object.keys(javier));
console.log(Object.values(javier));

//Borrar propiedades


//Variables por valor o referencia
// Variables por valor en JS son las primitivas: number, string y boolean
let edadJavier = 32;
let edadAlex = edadJavier; //Guardamos una primitiva en otra variable
                            //Variables por valor

console.log(edadJavier); //32
console.log(edadAlex); //32
edadJavier = edadAlex + 1;
console.log(edadJavier); //33
console.log(edadAlex); //32

// Variables por referencia
// let rafael = {
//     nombre: "Rafael"
// };
//
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre = "Lenin";
// console.log(rafael);
// console.log(lenin); // Ambos tienen el nombre de Lenin
// //Apuntan al mismo objeto
//
// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);

//Clonar objetos
let rafael = {
    nombre: "Rafael"
};

let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
console.log(rafael);
console.log(lenin); // Ya tenemos diferentes resulatdos

//Clonar arreglos
let arregloNumeros = [1,2,3,4];
let arreglo2 = Object.assign({},arregloNumeros);
console.log(arregloNumeros);
console.log(arreglo2);
arreglo2[0] = 100;
console.log(arregloNumeros);
console.log(arreglo2);






