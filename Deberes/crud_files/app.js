// app.js

// Seleccionar 2 diferentes entidades, por ejemplo Equipo de Futbol y Jugador de Futbol.
//
//     Cada entidad va a tener al menos 5 campos, y entre las dos entidades vamos a usar todos los primitivos de JavaScript.
//
//     Los datos de las entidades van a ser persistidos en archivos.
//
//     CRUD de la entidad Padre, CRUD de la entidad Hija,
//
//     Para ingresar a las entidades hijas, se debe seleccionar la entidad PADRE

// TEMA: Marca Celular
    //Se necesitan los datos: Number, Undefined, boolean, string, symbol, bigint
    //Marca (number: id ,string: nombre, boolean: nacional, number: accion, number: year, string: fundador )
    //Celular(number: id_tienda, string: nombre, number:precio, bool: actual, number: imei, string: serie)

const fs = require('fs');

class File{
    constructor(path){
        this.path = path;

    }
    writeFile(newContent){
        return new Promise(
            (resolve, reject)=>{
                fs.writeFile(this.path,
                    newContent,
                    (error) => {
                        if (error){
                            // console.log(error);
                            reject(error);
                        }  else {
                            // console.log("Escrito correctamente");
                            resolve(newContent);
                        }
                    }
                )
            }
        )
    }

    //Regresa todo el contenido del archivo
    readFile(){
        return new Promise(
            (resolve,reject) => {
                fs.readFile(this.path,
                    'utf-8',
                    (error, content) =>{
                        if (error){
                            console.log(`Error: ${error}`)
                            reject(error);
                        } else {
                            resolve(content);
                        }
                    }
                )
            }
        )

    }
    async countLines(){
        try {
            const answer = await this.readFile();
            return answer.split('\n').length;
        }catch(err){
            console.log(`ERROR countlines: ${err}`);
            return null;
        }
    }
}

class Brand{
    constructor(  name, national, shares, year, founder){
        this.id = null;
        this.name = name;
        this.national = national;
        this.shares = shares;
        this.year = year;
        this.founder = founder;
    }
    create(brand){
        const file = new File('./files/brands.json');
        file.readFile()
            .then(
                result => {
                    let array = [];
                     if (result !== ''){
                         result = JSON.parse(result)
                         // let maxId = result.reduce((prev, current) => {
                         //     return prev.id > current.id ? prev.id: current.id;
                         // })
                         const maxId = result[result.length -1].id;
                         console.log(`El id obtenido: ${maxId}`)
                         brand.id = Number(maxId) + 1;
                         array =  [...result, brand]

                     }  else {
                         brand.id = 1;
                         array = [brand];
                     }
                    this.writeBrands(array);
                }

            )


        //Intento contando lineas
        // file.countLines()
        //     .then(
        //         result => {
        //             console.log(`El valor de lineas es ${result}`);
        //             if (result === null){
        //                 brand.id = 1;
        //             }else {
        //                 brand.id = result;
        //             }
        //
        //             //escribimos en el archivo
        //             file.writeFile(JSON.stringify(brand) + "\n")
        //                 .then(
        //                     result => {
        //                         console.log(`Insertado: ${result}` )
        //                     }
        //                 ).catch(
        //                     error =>{
        //                         console.log(`ERROR: ${error}`)
        //                     }
        //                 )
        //         }
        // ).catch(
        //     error => {
        //         console.log(`ERROR: ${error}`);
        //     }
        // )
    }
    async delete(id){
        //TODO implementar try catch en await
        let brands =  await this.getAll();
        if (brands){

            brands = brands.filter( brand => brand.id !== Number(id));
            console.log('resultados de filter');
            console.log(brands);
            this.writeBrands(brands);
            return id;
        } else {
            return null;
        }
    }
    async update(updatedBrand, idUpdate){
        updatedBrand.id = idUpdate;
        let brands = await this.getAll();
        brands = brands.map(
           brand => brand.id === updatedBrand.id ? updatedBrand : brand
        );
        // console.log('Desde el update');
        // console.log(brands);
        this.writeBrands(brands);
    }

    getAll(){
        return new Promise(
            (resolve, reject) => {
                const file = new File('./files/brands.json');
                let brands;
                file.readFile()
                    .then(
                        result =>{
                            if (result) {
                                brands =  JSON.parse(result);
                                resolve(brands);
                                // console.log(brands);
                            } else {
                                reject (null);
                            }
                        }
                    ).catch(
                    error => {
                        console.log(`ERROR: ${error}`);
                        reject(error);
                    }
                )
            }
        )

    }

    writeBrands(listBrands){
        const file = new File('./files/brands.json');
        file.writeFile(JSON.stringify(listBrands))
            .then(
                result => {
                    console.log(`Insertado: ${result}` )
                }
            ).catch(
            error =>{
                console.log(`ERROR: ${error}`)
            }
        )
    }

}

class cellphone{
    constructor(id_brand, name, price,actual, imei, serial) {
        //Celular(number: id_tienda, string: nombre, number:precio, bool: actual, number: imei, string: serie)
        this.id_brand = id_brand;
        this.name = name;
        this.price = price;
        this.actual = actual;
        this.imei = imei;
        this.serial = serial;
    }
    create(cellphone){


    }
    delete(id){

    }
    update(updatedCellphone){

    }

    getAll(){

    }
    getById(id){

    }

}

//Menu
// 1. Ingresar Marca Celular
// 2. Listar marca celulares
// 3. Editar marca celular
// 4. Borrar marca celular
// 5. Ingresar celular
// 6. Listar celulares
// 7. Editar celular
// 8. Borrar celular

console.log("============Inicio aplicación===========");
//Data de prueba
const br = new Brand( 'Samsung',true, 125.88, 1945, 'Steve Jobs');
const br2 = new Brand('Apple',true, 125.88, 1945, 'Steve Jobs');
const br3 = new Brand('Apple',true, 125.88, 1945, 'Steve Jobs');
const arreglo = [br, br2, br3];
//Test create
// br.create(br)

// //Listar brand
// br.getAll();

//Eliminar brand
// br.delete(4);

//Editar un brand
const br4 = new Brand('Xiaomi',false, 125.88, 1945, 'Steve Jobs');
br.update(br4, 6);
// br.getAll()
//     .then(result => {
//
//         result.forEach(
//             brand=>{
//                 console.log(brand);
//                 //Test
//                 console.log("Fin");
//             }
//         )
//
// });





