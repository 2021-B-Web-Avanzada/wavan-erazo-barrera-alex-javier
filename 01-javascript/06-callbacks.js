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
            console.log(`Variables: ${contenido}`); //Esto demora en responder y por eso se ejecuta al final
            //06-ejemplo.txt -> Hola
            fs.readFile(
                './06-ejemplo.txt',
                'utf-8',
                (error, contenido)=>{

                    if(error){
                        console.log(`ERROR: ${error}`);
                    } else {
                        console.log(`Ejemplo: ${contenido}`); //Esto demora en responder y por eso se ejecuta al final
                    }
                }
            );
        }

    }
);

console.log('TERCERO');



