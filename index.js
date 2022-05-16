import {Cliente} from './Cliente.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

//const cliente2 = new Cliente('Marisol','12662324-0');

const empleado = new Empleado('Juan Perez','19755432-7',10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente = new Gerente('Pedro Rivas','88887643-2',12000);
gerente.asignarClave('655');
console.log(SistemaAutenticacion.login(gerente,'655'));

//const director = new Director('Elena Moreno','5541003-8',15000);

const cliente = new Cliente('Franco','18639925-0','123224');
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente,'01111'));