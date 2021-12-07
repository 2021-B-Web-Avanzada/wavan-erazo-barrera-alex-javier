// 01-variables.ts
var nombre = 'Javier'; //Referencia a los primitivos
var nombre2 = 'Javier2'; //REferencia a la clase
//nombre = 1; //Ya no es permitido
nombre = 'Alex';
var edad = 32;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 12.4;
//Duck typing
//Parece una pato, vuela, hace como un pato entonces es un pato
var apellido = 'Erazo'; //string -> lo asume. TS siempre trata de encontrar el tipo
apellido = 'Barrera';
apellido.toUpperCase(); //metodos string
var marihuana = 2; //Aquí somos mas JS y podemos hacerle cualquier tipo
marihuana = '2';
marihuana = true;
marihuana;
//Definir los tipos posibles
var edadMultiple = 2;
edadMultiple = '2';
edadMultiple = new Date();
//edadMultiple = true; //Esto ya marca un error
