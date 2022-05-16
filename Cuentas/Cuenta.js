export class Cuenta {
    #cliente;
    #saldo;

    constructor(cliente,numero,agencia,saldo) {
        
        if (this.constructor == Cuenta) {
            throw new Error('No se deben instanciar objetos de la clase Cuenta');
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoCuenta(valor) { //método o función
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retiroCuenta(valor) { //método o función
        throw new Error('Debe implementar el método retiroCuenta en su clase');
    }

    _retiroCuenta(valor,comision) { //método o función
        valor = valor * (1+comision/100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retiroCuenta(valor);
        cuentaDestino.depositoCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }

    prueba() {
        console.log('Método padre');
    }
}