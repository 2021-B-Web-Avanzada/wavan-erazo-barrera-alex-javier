//03-operadores.js

const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES COMO PARAMETROS
//FIND
//Enviamos una expresion -> TRUTY o FALSY
//devuelve el primero que cumple esa condicion
//Si no encuentra devuelve undefined
const respuestaFind = arreglo.
    find(
        function(indiceActual,valorActual,arregloCompleto ){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === 'Cristian';
        });
console.log("Respuesta Find: ", respuestaFind);


//FINDINDEX
//Enviamos una expresion -> TRUTY o FALSY

const respuestaFindIndex = arreglo.
    findIndex(
        function(valorActual){
                return valorActual.nombre === "Cristian";
        }
    );
//Como arrow Function
const respuestaFindIndexArrow = arreglo.
findIndex(valorActual => valorActual.nombre === "Cristian");

console.log("Respuesta FindIndex: ",  respuestaFindIndex); //indice -> 6 //No encuentra -> -1
console.log("Respuesta FindIndexArrow: ",  respuestaFindIndexArrow); //indice -> 6 //No encuentra -> -1


//FOREACH
//Itera el arreglo
arreglo.forEach(
    function (valorActual){
        console.log("valorActual: ",valorActual)
    }
);

//MAP
//Modificar o mutar el arreglo y devuelve un nuevo arreglo

const resultadoMap = arreglo.
    map(
        function (valorActual){
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota+1
            }
            return nuevoElemento;
        }

)

console.log(resultadoMap);

//FILTER
//Filtrar el arreglo
//Enviamos expr TRUTY o FALSY
//Nos devuelve un subconjunto de los elementos que cumplen con la condicion
const resultadoFilter = arreglo.
    filter(valorActual => valorActual.nota > 14);

console.log(resultadoFilter);

//SOME
//Existe alguna? Si o NO
//Basta que cumpla uno y devuelve que es verdad
//OR
const resultadoSome = arreglo.
some(valorActual => valorActual.nota > 14);

console.log("Hay notas mayor a 14: ", resultadoSome);

//Every
//Aqui todos deben cumplir
//AND
const resultadoEvery = arreglo.
every(valorActual => valorActual.nota > 14);

console.log("Hay notas mayor a 14: ", resultadoEvery);


