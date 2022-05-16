import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado {
    constructor(nombre,rut,salario) {
        super(nombre,rut,salario);
    }

    verBonificacion() {
        const bono = 5;
        return super._verBonificacion(bono);
    }
}