//05-destructuring.js
const javier ={
    nombre: "Javier",

};

const carolina = {
    nombre: "Carolina",
    apellido: "Herrera"
};

const javierCarolina = { //Nueva referencia
    ...carolina, //1 El orden es importante para propiedades que se repiten
    ...javier //2 El ultimo reemplaza los anteriores
};

//nombre de Carolina lo reemplaza el de javier
console.log(javierCarolina); //{nombre: javier, apellido: herrera}


//Destructuracion de arreglos
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9]
const arregloDes = [
    ...arr1, //Se ingresa primero
    ...arr2
]
console.log(arregloDes);

//Destructuring en arreglos en funciones
console.log(...arregloDes); //Imprimimos cada elemento independientemente  1 2 3 4 5...