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


//Metodos de arreglos
arreglo.push(11); //Anadir elementos la final

arreglo.pop();//Elimina el ultimo elemento

arreglo.unshift(500); //Anadir al inicio del arreglo

console.log((arreglo));
//[ 500, true, 1, 1, 'Javier', undefined, {}, [ 1, 3 ] ]

//SPLICE
//Agregar en el indice 0, numero de elementos eliminidos, items a agregar...
arreglo.splice(0, 0, 4 ); //Remueve y anade cosas
//[ 4, 500, true, 1, 1, 'Javier', undefined, {}, [ 1, 3 ] ]
console.log((arreglo));
//Borramos desde el quinto en adelante
const indice = arreglo.indexOf(undefined);
arreglo.splice(indice, 3); //Borramos desde que encuentra undefined (incluido) y 2 mas
//[ 4, 500, true, 1, 1, 'Javier' ]
console.log(arreglo);


