// 01-variables.ts

let nombre: string = 'Javier'; //Referencia a los primitivos
let nombre2: String = 'Javier2'; //REferencia a la clase
//nombre = 1; //Ya no es permitido
nombre = 'Alex';

let edad: number =32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

//Duck typing
//Parece una pato, vuela, hace como un pato entonces es un pato
let apellido = 'Erazo'; //string -> lo asume. TS siempre trata de encontrar el tipo
apellido = 'Barrera';
apellido.toUpperCase(); //metodos string

let marihuana: any = 2; //Aquí somos mas JS y podemos hacerle cualquier tipo
marihuana = '2';
marihuana = true;
marihuana

//Definir los tipos posibles
let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = new Date();
//edadMultiple = true; //Esto ya marca un error