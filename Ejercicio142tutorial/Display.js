class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoDeOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '%'
        }
    }
    borrar() {
        //this.valorActual.toString().split(0. - 1); borra ultima posición 
        this.valorActual = this.valorActual.toString().slice(0, - 1);
        this.imprimirValores();
    }
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoDeOperacion = undefined;
        this.imprimirValores();
    }
    computar(tipo) {
        this.tipoDeOperacion !== 'igual' && this.calcular();
        this.tipoDeOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }
    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoDeOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorAnterior) || isNaN(valorActual)) return;
        this.valorActual = this.calculadora[this.tipoDeOperacion](valorAnterior, valorActual);

    }

}