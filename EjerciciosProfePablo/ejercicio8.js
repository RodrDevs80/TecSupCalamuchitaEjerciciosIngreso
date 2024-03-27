/**
 * 8-Desarrolla una función llamada calcularFactorial que tome un número como parámetro y devuelva su factorial. Utiliza un ciclo for para realizar la multiplicación iterativa.
 */

const numero = 7;
const numero2 = 4;
const numeroString = '7';
const cadena = 'casa';


const calcularFactorial = (numero) => {
    let factorial = 1;
    if (typeof numero !== 'number') {
        return console.log('EL dato ingresado no es valido');
    }
    for (let i = numero; i > 0; i--) {
        factorial *= i;
    }
    return console.log(factorial);
}
//test
console.log('***********************************');
calcularFactorial(numero);
console.log('***********************************');
calcularFactorial(numero2);
console.log('***********************************');
calcularFactorial(numeroString);
console.log('***********************************');
calcularFactorial(cadena);