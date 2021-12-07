// 02-interfaces.ts
//Las interfaces nos ayuda a tipar los datos
// no son objetos JSON
interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; //opcional
    sueldo?: number; //opcional
    casado: boolean;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string | 'BN'; //Esto es tipar funciones
    calcularImpuesto:(impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
}


//Ahora podemos hacer la implementación de la inteerfaz
let user: Usuario = {
    nombre: 'Javier',
    apellido: 'Erazo',
    casado: false,
    sueldo: 11.3,
    estado:"BN",
    imprimirUsuario: (string) =>{
        return `EL mensaje es ${string}`;
    },
    calcularImpuesto: impuesto => this.sueldo + this.sueldo*impuesto,
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}