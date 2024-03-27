/**
 * 5-Escribe una función llamada calcularPotencia que tome dos números como parámetros, la base y el exponente, y devuelva el resultado de elevar la base al exponente. Utiliza un ciclo for para realizar la multiplicación.
 */

let base = 5;
const exponente = 3;
let base2 = '5';
const exponente2 = '3';
let base3 = 'casa';
const exponente3 = '3';

function calcularPotencia(base, exponente) {
    if (isNaN(base) || isNaN(exponente)) {
        return console.log('Algún dato ingresado no es valido!');
    }

    let resultado = base;
    for (let i = 0; i < exponente - 1; i++) {
        //console.log(resultado);
        resultado *= base;
    }
    console.log(resultado);
}

calcularPotencia(base, exponente);
console.log('**************************************');
calcularPotencia(base2, exponente2);
console.log('**************************************');
calcularPotencia(base3, exponente3);