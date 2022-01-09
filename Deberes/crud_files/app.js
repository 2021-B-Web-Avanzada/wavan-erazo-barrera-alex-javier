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

class File {
    constructor(path) {
        this.path = path;

    }

    writeFile(newContent) {
        return new Promise(
            (resolve, reject) => {
                fs.writeFile(this.path,
                    newContent,
                    (error) => {
                        if (error) {
                            // console.log(error);
                            reject(error);
                        } else {
                            // console.log("Escrito correctamente");
                            resolve(newContent);
                        }
                    }
                )
            }
        )
    }

    //Regresa todo el contenido del archivo
    readFile() {
        return new Promise(
            (resolve, reject) => {
                fs.readFile(this.path,
                    'utf-8',
                    (error, content) => {
                        if (error) {
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

    async countLines() {
        try {
            const answer = await this.readFile();
            return answer.split('\n').length;
        } catch (err) {
            console.log(`ERROR countlines: ${err}`);
            return null;
        }
    }
}

class Brand {
    constructor(name = null, national = null, shares = null, year = null, founder = null) {
        this.id = null;
        this.name = name;
        this.national = national;
        this.shares = shares;
        this.year = year;
        this.founder = founder;
    }

    create(brand) {
        const file = new File('./files/brands.json');
        file.readFile()
            .then(
                result => {
                    let array = [];
                    if (result !== '') {
                        result = JSON.parse(result)
                        // let maxId = result.reduce((prev, current) => {
                        //     return prev.id > current.id ? prev.id: current.id;
                        // })
                        const maxId = result[result.length - 1].id;
                        // console.log(`El id obtenido: ${maxId}`)
                        brand.id = Number(maxId) + 1;
                        array = [...result, brand]

                    } else {
                        brand.id = 1;
                        array = [brand];
                    }
                    this.writeBrands(array);
                }
            )

    }

    async delete(id) {
        let brands = await this.getAll();
        if (brands) {

            brands = brands.filter(brand => brand.id !== Number(id));
            console.log('resultados de filter');
            console.log(brands);
            this.writeBrands(brands);
            return id;
        } else {
            return null;
        }
    }

    async update(updatedBrand, idUpdate) {
        updatedBrand.id = idUpdate;
        let brands = await this.getAll();
        brands = brands.map(
            brand => brand.id === updatedBrand.id ? updatedBrand : brand
        );
        // console.log('Desde el update');
        // console.log(brands);
        this.writeBrands(brands);
    }

    getAll() {
        return new Promise(
            (resolve, reject) => {
                const file = new File('./files/brands.json');
                let brands;
                file.readFile()
                    .then(
                        result => {
                            if (result) {
                                brands = JSON.parse(result);
                                resolve(brands);
                                // console.log(brands);
                            } else {
                                reject(null);
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

    writeBrands(listBrands) {
        const file = new File('./files/brands.json');
        file.writeFile(JSON.stringify(listBrands))
            .then(
                result => {
                    console.log(`Insertado: ${result}`)
                }
            ).catch(
            error => {
                console.log(`ERROR: ${error}`)
            }
        )
    }

    getById(id) {
        return new Promise(
            resolve => {
                // let flag = false;
                this.getAll()
                    .then(
                        result => {
                            const brand = result.filter(brand => brand.id === Number(id));
                            if (brand) {
                                resolve(brand)
                            }

                        }
                    ).catch(
                    error => {
                        console.log(error)

                    }
                )

            }
        )

    }

}

class Cellphone {
    constructor(id_brand = null, name = null, price = null, actual = null, imei = null, serial = null) {
        //Celular(number: id_tienda, string: nombre, number:precio, bool: actual, number: imei, string: serie)
        this.id = null;
        this.id_brand = id_brand;
        this.name = name;
        this.price = price;
        this.actual = actual;
        this.imei = imei;
        this.serial = serial;
    }

    create(cellphone) {
        const file = new File('./files/cellphones.json');
        file.readFile()
            .then(
                result => {
                    let array = [];
                    if (result !== '') {
                        result = JSON.parse(result)
                        const maxId = result[result.length - 1].id;
                        // console.log(`El id obtenido: ${maxId}`)
                        cellphone.id = Number(maxId) + 1;
                        array = [...result, cellphone]

                    } else {
                        cellphone.id = 1;
                        array = [cellphone];
                    }
                    this.writeCellphones(array);
                }
            )


    }

    writeCellphones(cellphones) {
        const file = new File('./files/cellphones.json');
        file.writeFile(JSON.stringify(cellphones))
            .then(
                result => {
                    console.log(`Insertado: ${result}`)
                }
            ).catch(
            error => {
                console.log(`ERROR: ${error}`)
            }
        )
    }

    async delete(id, idBrand = null) {
        let cellphones = await this.getAll(idBrand);
        if (cellphones) {

            cellphones = cellphones.filter(cellphone => cellphone.id !== Number(id));
            console.log('resultados de filter=========');
            console.log(cellphones);
            this.writeCellphones(cellphones);
            return id;
        } else {
            return null;
        }

    }

    async update(updatedCellphone, idUpdate, idBrand) {
        updatedCellphone.id = idUpdate;
        let cellphones = await this.getAll(idBrand);
        cellphones = cellphones.map(
            brand => brand.id === Number(idUpdate) ? updatedCellphone : brand
        );
        console.log('Desde el update');
        console.log(cellphones);
        this.writeCellphones(cellphones);

    }

    getAll(idBrand = null) {
        return new Promise(
            (resolve, reject) => {
                const file = new File('./files/cellphones.json');
                let cellphones;
                file.readFile()
                    .then(
                        result => {
                            if (result) {
                                cellphones = JSON.parse(result);
                                if (idBrand != null) {
                                    cellphones = cellphones.filter(
                                        cell => cell.id_brand === idBrand
                                    )
                                    // resolve(cellphonesBrand);
                                }
                                resolve(cellphones)

                                // console.log(cellphones);
                            } else {
                                reject(null);
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

    getById(id, idBrand) {
        return new Promise(
            resolve => {
                // let flag = false;
                this.getAll(idBrand)
                    .then(
                        result => {
                            const cellphone = result.filter(cellphone => cellphone.id === Number(id));
                            if (cellphone) {
                                resolve(cellphone)
                            }

                        }
                    ).catch(
                    error => {
                        console.log(error)

                    }
                )

            }
        )
    }

}


console.log("============Inicio aplicación===========");
//Data de prueba
const br = new Brand('Samsung', true, 125.88, 1945, 'Steve Jobs');
const br2 = new Brand('Apple', true, 125.88, 1945, 'Steve Jobs');
const br3 = new Brand('Apple', true, 125.88, 1945, 'Steve Jobs');

const cel = new Cellphone(1, 'iphone 12', 999.99, true, 3540394786464, 'JSDF989SDF');
const arreglo = [br, br2, br3];
//Test create
// br.create(br)

// //Listar brand
// br.getAll();

//Eliminar brand
// br.delete(4);

//Editar un brand
// const br4 = new Brand('Xiaomi',false, 125.88, 1945, 'Steve Jobs');
// // br.update(br4, 6);


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

// Verificar si existe una tienda
// br.checkExist(52).then(answer => {
//     console.log( answer);
// })

//Actualizar la tienda
// br.update(br, 6).then(result => {
//         console.log('fin update')
//     }
// )

//Test Para el crud de celulares

//Crear un celular
//Primero pedimos el id de la marca

//Verificamos si existe

//Si existe entonces registramos
// cel.create(cel);

//Caso contrario, pedimos registro

//Listar celulares por numero de tienda
//Tenemos que ingresar primero el id de la tienda

//Verificamos que existe, si existe entonces

//Listamos todos los celulares con el id de la tienda
// cel.getAll(2)
//     .then(result => {
//
//         result.forEach(
//             cellphones=>{
//                 console.log(cellphones);
//                 //Test
//                 console.log("Fin");
//             }
//         )
//
// });

//Borrar celular

//Ingresa el id de la tienda

//Verificamos que existe, si existe entonces

//Listamos todos los celulares

//Ingresa el id a borrar del celular

//Borramos
// cel.delete(3, 1)

//Actualizar un celular

//Ingresa el id de la tienda

// Verificamos que existe, si existe entonces

//Listamos  todos los celulares

//ingrese el id  - ingrese los nuevos datos

//Actualizamos el elemento
// const celUp = new Cellphone(1,'Samsung dftal', 999.99, true, 3540394786464, 'JSDF989SDF');
// cel.update(celUp, 1, 1).then(
//     ()=>{
//         console.log('Fin del update')
//     }
// )

//Menu
console.log('=========Inicio App=============');
// const readLine = require('readline');
// let scanInterface = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// console.log('1. Ingresar Marca Celular');
// console.log('2. Listar marca celulares');
// console.log('3. Editar marca celular');
// console.log('4. Borrar marca celular');
// console.log('5. Ingresar a una marca...')
// let opcion = null;
//
// console.log(`la opcion es: ${opcion}`)

const inquirer = require('inquirer') //Esta es una dependencia
//%npm install inquirer


async function menu() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'opciones',
                message: "Menú de marcas de celulares, seleccione...",
                choices: [
                    'Ingresar',
                    'Listar',
                    'Editar',
                    'Borrar',
                    'Celulares...',
                    'SALIR'
                ]

            }
        ]).then(async answer => {
            return answer.opciones;
        })
}

async function menuCelulares(){
    return new Promise(async ()=>{
        const cellphone = new Cellphone();
        let idBrandGlobal = null;
        await inquirer
            .prompt(
                [
                    {
                        type: 'number',
                        name: 'idBrand',
                        message: 'Ingrese el identificador de la marca para ver sus celulares: '
                    }
                ]).then(answer => {
                // console.log(answer.idBrand);
                idBrandGlobal = answer.idBrand;
                cellphone.getAll(answer.idBrand)
                    .then(cellphones => {
                        // console.log(cellphones)
                        if (cellphones.length > 0) {
                            console.log('La lista de celulares de esta marca son:')
                            console.log(cellphones)
                        } else {
                            console.log('No existe celulares registrados...')
                        }
                    }).then(
                    async () => {
                        // let opcionCelular = null;
                        // while

                        await inquirer
                            .prompt(
                                [
                                    {
                                        type: 'list',
                                        name: 'opciones',
                                        message: "Menú de celulares, seleccione...",
                                        choices: [
                                            'Ingresar',
                                            'Listar',
                                            'Editar',
                                            'Borrar'
                                        ]

                                    }
                                ]).then(async answer => {
                                    const cellphone = new Cellphone();
                                    switch (answer.opciones) {
                                        case 'Ingresar':
                                            // console.log(`El identificadoe de brand global ${idBrandGlobal}`)
                                            const dataCellphone = await inquirer
                                                .prompt([
                                                    {
                                                        type: 'input',
                                                        name: 'name',
                                                        message: 'Ingrese el nombre: '
                                                    },
                                                    {
                                                        type: 'input',
                                                        name: 'price',
                                                        message: 'Ingrese el precio: '
                                                    },
                                                    {
                                                        type: 'input',
                                                        name: 'actual',
                                                        message: 'Es actual? (true/false): '
                                                    },
                                                    {
                                                        type: 'input',
                                                        name: 'imei',
                                                        message: 'Ingrese el IMEI: '
                                                    },
                                                    {
                                                        type: 'input',
                                                        name: 'serial',
                                                        message: 'Ingrese el número de serie: '
                                                    }
                                                ])
                                            const {name, price, actual, imei, serial} = dataCellphone;
                                            const newCellphone = new Cellphone(idBrandGlobal, name, parseFloat(price), (actual === 'true'), parseInt(imei), serial);
                                            cellphone.create(newCellphone);
                                            // console.log(`se va a ingresar el siguiente elemento`)
                                            // console.log(newCellphone)
                                            break;
                                        case 'Listar':
                                            console.log(`====Listado de celulares de ${idBrandGlobal}=====`);
                                            cellphone.getAll(idBrandGlobal)
                                                .then(result => {
                                                    result.forEach(
                                                        brand => {
                                                            console.log(brand);
                                                        }
                                                    )
                                                });
                                            break;
                                        case 'Editar':
                                            await inquirer
                                                .prompt(
                                                    [
                                                        {
                                                            type: 'input',
                                                            name: 'idEdit',
                                                            message: 'Ingrese el identificador del celular: '
                                                        },
                                                    ]).then(
                                                    result => {
                                                        return cellphone.getById(result.idEdit, idBrandGlobal)
                                                        // console.log(result);
                                                    }
                                                ).then(
                                                    async cellResp => {
                                                        // console.log(cellResp);
                                                        if (cellResp[0]) {
                                                            cellResp = cellResp[0];
                                                            // console.log(cellResp)
                                                            // const {id, name, national, shares, year, founder} = cellResp;
                                                            // console.log(`El tipo es: ${typeof cellResp[0]}`)
                                                            // console.log(`El nombre es: ${cellResp.name}`)
                                                            const dataCellphone = await inquirer
                                                                .prompt([
                                                                    {
                                                                        type: 'input',
                                                                        name: 'name',
                                                                        message: 'Ingrese el nuevo nombre: ',
                                                                        default: cellResp.name
                                                                    },
                                                                    {
                                                                        type: 'input',
                                                                        name: 'price',
                                                                        message: 'Ingrese el nuevo precio: ',
                                                                        default: cellResp.price
                                                                    },
                                                                    {
                                                                        type: 'input',
                                                                        name: 'actual',
                                                                        message: 'Es actual? (true/false): ',
                                                                        default: cellResp.actual
                                                                    },
                                                                    {
                                                                        type: 'input',
                                                                        name: 'imei',
                                                                        message: 'Ingrese el nuevo IMEI: ',
                                                                        default: cellResp.imei
                                                                    },
                                                                    {
                                                                        type: 'input',
                                                                        name: 'serial',
                                                                        message: 'Ingrese el nuevo número de serie: ',
                                                                        default: cellResp.serial
                                                                    }
                                                                ])
                                                            // console.log(`El id es: ${cellResp.id}`)
                                                            const {name, price, actual, imei, serial} = dataCellphone;
                                                            const newCellphone = new Cellphone(idBrandGlobal, name, parseFloat(price), (actual === 'true'), parseInt(imei), serial);
                                                            // console.log(newCellphone);
                                                            // console.log(`El id es: ${cellResp.id}`)
                                                            await cellphone.update(newCellphone, cellResp.id, idBrandGlobal);
                                                        }
                                                    }
                                                )
                                            break;
                                        case 'Borrar':
                                            let idDeleteFinal = null;
                                            await inquirer
                                                .prompt(
                                                    [
                                                        {
                                                            type: 'input',
                                                            name: 'idDelete',
                                                            message: 'Ingrese el identificador del celular para borrar: '
                                                        },
                                                    ]).then(async answer => {
                                                    idDeleteFinal = answer.idDelete;
                                                    await inquirer
                                                        .prompt(
                                                            [
                                                                {
                                                                    type: 'confirm',
                                                                    name: 'idDeleteConfirm',
                                                                    message: `Esta seguro de borrar : ${answer.idDelete}`
                                                                },
                                                            ]).then(answer => {
                                                            if (answer.idDeleteConfirm) {
                                                                cellphone.delete(idDeleteFinal)
                                                                // console.log(idDeleteFinal);
                                                            } else {
                                                                console.log('no se ha borrado nada ...');
                                                            }

                                                        })
                                                })
                                            break;
                                        default:
                                            break;
                                    }

                                }
                            )
                    }
                )
            })
    })

}

async function main() {
    let opcion = null;
    while (opcion !== 'SALIR') {
        try {
            // const brand = new Brand();
            opcion = await menu();
            // opcion().then(async answer =>{
            // opcion = await answer;
            const brand = new Brand();
            switch (opcion) {
                case 'Ingresar':
                    const dataBrand = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'Ingrese el nombre: '
                            },
                            {
                                type: 'input',
                                name: 'national',
                                message: 'Es nacional?(true/false): '
                            },
                            {
                                type: 'input',
                                name: 'shares',
                                message: 'Ingrese el valor de sus acciones: '
                            },
                            {
                                type: 'input',
                                name: 'year',
                                message: 'Ingrese el año de creación: '
                            },
                            {
                                type: 'input',
                                name: 'founder',
                                message: 'Ingrese el nombre del fundador: '
                            }
                        ])
                    const {name, national, shares, year, founder} = dataBrand;
                    const newBrand = new Brand(name, (national === 'true'), parseFloat(shares), parseInt(year), founder);
                    brand.create(newBrand);
                    // console.log(dataBrand)
                    break;
                case 'Listar':
                    brand.getAll()
                        .then(result => {
                            result.forEach(
                                brand => {
                                    console.log(brand);
                                }
                            )
                        });

                    break;
                case 'Editar':
                    await inquirer
                        .prompt(
                            [
                                {
                                    type: 'input',
                                    name: 'idEdit',
                                    message: 'Ingrese el identificador de la tienda: '
                                },
                            ]).then(
                        result => {
                            return brand.getById(result.idEdit)
                            // console.log(result);
                        }
                    ).then(
                        async brandResp => {
                            if (brandResp[0]) {
                                brandResp = brandResp[0];
                                console.log(brandResp)
                                // const {id, name, national, shares, year, founder} = brandResp;
                                // console.log(`El tipo es: ${typeof brandResp[0]}`)
                                // console.log(`El nombre es: ${brandResp.name}`)
                                const dataBrand = await inquirer
                                    .prompt([
                                        {
                                            type: 'input',
                                            name: 'name',
                                            message: 'Ingrese el nuevo nombre: ',
                                            default: brandResp.name
                                        },
                                        {
                                            type: 'input',
                                            name: 'national',
                                            message: 'Es nacional?(true/false): ',
                                            default: brandResp.national
                                        },
                                        {
                                            type: 'input',
                                            name: 'shares',
                                            message: 'Ingrese el nuevo valor de sus acciones: ',
                                            default: brandResp.shares
                                        },
                                        {
                                            type: 'input',
                                            name: 'year',
                                            message: 'Ingrese el nuevo año de creación: ',
                                            default: brandResp.year
                                        },
                                        {
                                            type: 'input',
                                            name: 'founder',
                                            message: 'Ingrese el nuevo nombre del fundador: ',
                                            default: brandResp.founder
                                        }
                                    ])
                                // console.log(`El id es: ${brandResp.id}`)
                                const {name, national, shares, year, founder} = dataBrand;
                                const newBrand = new Brand(name, (national === 'true'), parseFloat(shares), parseInt(year), founder);
                                // console.log(newBrand);
                                // console.log(`El id es: ${brandResp.id}`)
                                await brand.update(newBrand, brandResp.id);
                            }
                        }
                    )
                    break;

                case 'Borrar':
                    let idDeleteFinal = null;
                    await inquirer
                        .prompt(
                            [
                                {
                                    type: 'input',
                                    name: 'idDelete',
                                    message: 'Ingrese el identificador de la tienda para borrar: '
                                },
                            ]).then(async answer => {
                            idDeleteFinal = answer.idDelete;
                            await inquirer
                                .prompt(
                                    [
                                        {
                                            type: 'confirm',
                                            name: 'idDeleteConfirm',
                                            message: `Esta seguro de borrar : ${answer.idDelete}`
                                        },
                                    ]).then(answer => {
                                    if (answer.idDeleteConfirm) {
                                        brand.delete(idDeleteFinal)
                                        // console.log(idDeleteFinal);
                                    } else {
                                        console.log('no se ha borrado nada ...');
                                    }

                                })
                        })
                    break;
                case 'Celulares...':
                     await menuCelulares().then(
                        async ()=>{
                            console.log('Fin del menu cleular===========')
                            await main();
                        })
                    console.log('Fin del menu celulares azynx===========')
                    break;
                default:
                    break;
            }

            // console.log(answer)
            // })
            // console.log('Respuesta: ', opcion);

            console.log('Fin del menu de las marcas===========')
        } catch (error) {
            console.error(error);
        }
    }

}


//Inicio aplicacion
main();




