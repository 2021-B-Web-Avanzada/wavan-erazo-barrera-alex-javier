//04-clases.ts

class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected  nombreApellido = ''; //Duck typing

    //Constructor
    constructor(nombrePar: string, apellidoPar: string){
        this.nombre = nombrePar;
        this.apellido = apellidoPar;
    }

    //Metodos
    private mostrarNombreApellido(): string{
        return this.nombreApellido;
    }
}

//Herencia

class Usuario extends Persona{
    constructor(
        nombrePar:string,
        apellidoPar: string,
        public cedula: string, //Modificador de acceso -> propiedad de la clase
        public estadoCivil: string //Modificador de acceso -> propiedad de la clase

    ) {
        super(nombrePar, apellidoPar);
    }
}

const javier = new Usuario(
    'Javier',
    'erazo',
    '12323123',
    'soltero'
);
//En el atributo cedula y estadoCivil no es necesario hacer la asignación arriba e
//n el constructor, eso ya lo asume TS
javier.nombre;
javier.apellido;
javier.cedula; //123123123
javier.estadoCivil; //soltero
