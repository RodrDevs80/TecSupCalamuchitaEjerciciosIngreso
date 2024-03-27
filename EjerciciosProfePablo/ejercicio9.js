/**
 * 9-Escribe una función llamada imprimirPares que tome un número como parámetro e imprima todos los números pares desde 1 hasta ese número utilizando un ciclo for.
 */

const numero = 20;
const numero2 = 4;
const numeroString = '7';
const cadena = 'casa';


function imprimirPares(numero) {
    for (let i = 0; i <= numero; i++) {
        if (typeof numero !== 'number') {
            return console.log('EL dato ingresado no es valido');
        }
        if (i % 2 === 0) {
            console.log(`El numero ${i} es par!`);
        } else {
            console.log(`El numero ${i} es impar!`);
        }
    }
}

console.log('***********************************');
imprimirPares(numero);
console.log('***********************************');
imprimirPares(numero2);
console.log('***********************************');
imprimirPares(numeroString);
console.log('***********************************');
imprimirPares(cadena);