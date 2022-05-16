import { Empleado } from "./Empleado.js";

export class Director extends Empleado {
    constructor(nombre,rut,salario) {
        super(nombre,rut,salario);
    }

    verBonificacion() {
        const bono = 10;
        return super._verBonificacion(bono);
    }
}