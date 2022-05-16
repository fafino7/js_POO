export class Empleado {
    #nombre;
    #rut;
    #salario;
    #clave;

    constructor(nombre,rut,salario) {
        this.#nombre = nombre;
        this.#rut = rut;
        this.#salario = salario;
        this.#clave = '';
    }

    asignarClave(clave) {
        this.#clave = clave;
    }

    autenticable(clave) {
        return clave == this.#clave;
    }

    verBonificacion() {
        return this.#salario;
    }

    _verBonificacion(bono) {
        return this.#salario + this.#salario*bono/100;
    }
}