const fs = require('fs');

function promesasLeerArchivo(path){
    return new Promise(
        (resolve, reject)=> {
            fs.readFile(
                path,
                'utf-8',
                (errorVar, contenidoVar)=>{
                    if (errorVar){
                        reject(errorVar);
                    } else {
                        resolve(contenidoVar);
                    }
                }
            )

        }
    )

}

function promesasEscribirArchivo(path, contenidoActual, nuevoContenido){
    return new Promise(
        (resolve, reject) => {
            contenido = contenidoActual + nuevoContenido + '\n';
            if(contenido){
                fs.writeFile(path,
                    contenido,
                    'utf-8',
                    (error) => {
                        if (error){
                            reject(error);
                        } else {
                            resolve(contenido);
                        }

                    }
                )
            }
        }
    )
}

function ejercicio(path, nuevoContenido){
    // datosLeidos ='';
    promesasLeerArchivo(path)
        .then(
            (datosLeidos) => {
                 return promesasEscribirArchivo(path, datosLeidos, nuevoContenido);
            }
        )
        .then(
            resultadoFinal => {
                console.log(resultadoFinal);
            }
        ).catch(
        (error)=>{
            console.log(error)
        }
        
    )

}

ejercicio('./06-ejemplo.txt', 'Hola desde  promises10');
