//10-async-await.js

const promiseLeerArchivo = ()=>{
    return new Promise(
        (res, reject) => {
            res('Contenido Leer archivo');
        }
    );
}

const promiseEscribirArchivo =() =>{
    return new Promise(
        (res, resolve)=>{
            res('CONTENIDO ESCRIBIR ARCHIVO');
        }
    );
}

//Async Await
// 1) Metodos DE CLASES
// 2) Funciones

//ESTO NO ES POSIBLE
//PORQUE NO ESTA DENTRO DE LA FUNCIÓN
//const respuesta = await promesaEscribirArchivo;

//Convierte al metodo en un promise
const ejemplo1 = async function (){};
const ejemplo2 = async ()=>{};

async function ejercicio(){
    console.log('1')
    try {

    }catch(error){

    }
}
ejercicio().then().catch().finally();