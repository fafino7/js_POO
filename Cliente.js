export class Cliente
{
    nombreCliente; //atributos o propiedades de la clases
    rutCliente;
    #clave;

    constructor(nombreCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    asignarClave(clave) {
        this.#clave = clave;
    }

    autenticable(clave) {
        return false;
    }
}