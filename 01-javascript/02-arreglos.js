//02-arreglos
//Pueden tener cualquier cosa
let arreglo = [6,7,8,9,10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true,1,1,"Javier", undefined, {}, [1,3]];

// For of
//para recorrer valores
for (let numero of arreglo){
    console.log(numero);
}
// for in
for (let indice in arreglo){
    arreglo[indice];
    console.log("indice",indice);
}

let objetoPrueba = {a: 1, b: 2, c:3};
for (let llave in objetoPrueba){
    console.log(llave);
}
