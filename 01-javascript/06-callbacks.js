//06-callbacks.js
const fs = require('fs'); //file system de NODE

console.log('Primero');

fs.readFile(
    './01-variables.js',
    'utf-8',
    (error, contenido)=>{
        if(error){
            console.log(`ERROR: ${error}`);
        } else {
            //06-ejemplo.txt -> Hola
            fs.readFile(
                './06-ejemplo.txt',
                'utf-8',
                (errorVar, contenidoVar)=>{

                    if(errorVar){
                        console.log(`ERROR: ${errorVar}`);
                    } else {
                        console.log(contenido, contenidoVar); //Esto demora en responder y por eso se ejecuta al final
                    }
                }
            );
        }

    }
);

console.log('TERCERO');



