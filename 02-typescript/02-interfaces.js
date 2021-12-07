var _this = this;
//Ahora podemos hacer la implementación de la inteerfaz
var user = {
    nombre: 'Javier',
    apellido: 'Erazo',
    casado: false,
    sueldo: 11.3,
    estado: "BN",
    imprimirUsuario: function (string) {
        return "EL mensaje es ".concat(string);
    },
    calcularImpuesto: function (impuesto) { return _this.sueldo + _this.sueldo * impuesto; },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
