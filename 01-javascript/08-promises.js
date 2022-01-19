//08-promises\
//Las promesas son asincronas
//En el mundo de las promesas ya puedo devolver cosas
//Diferente de la callbacks que no puedo devolver nada

const fs = require('fs');

function promesaEsPar(numero){
    return new Promise(
        (resolve, reject) => {
            if (numero % 2 === 0) {
                resolve(numero);
            } else {
                reject('No es par');
            }
        }
    )
}

function promesaElevarAlCuadrado(numero){
    return new Promise(
        (resolve, reject) => {
            const resultado = Math.pow(numero, 2);
            resolve(resultado);
        }
    )
}
