const fs = require('fs');
/*
Hacer una funcion que me acepte como parametro una vatiable
con el path del archivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo
 */

//Así escribimos en un archivo
// fs.writeFile(
//     path,
//     "utf-9",
//     (error) => {
//
//     }
// )
function escribirArchivo(path, contenidoNuevo){
    let contenido =''
    fs.readFile(
        path,
        'utf-8',
        (errorVar, contenidoVar)=>{
            if(errorVar){
                return console.log(`ERROR: ${errorVar}`);
            } else {
                contenido = contenidoVar + contenidoNuevo + '\n';
                fs.writeFile(path,
                    contenido,
                    'utf-8',
                    (error) => {
                        if (error){
                            console.log(`ERROR: ${error}`);
                        } else {

                            console.log("Escrito correctamente");
                        }

                    }
                )
            }
        }
    )
    return contenido;
}




escribirArchivo('./06-ejemplo.txt', 'Buenas tardesdddPruebaNuevofgh')
// leerArchivos('./06-ejemplo.txt')



//Con llamadas sincronas