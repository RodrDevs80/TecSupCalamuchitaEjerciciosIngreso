/**
 * 1-Escribe una función llamada imprimirNumeros que tome un número como parámetro e imprima todos los números desde 1 hasta ese número utilizando un ciclo for.
 */

const numero = 20;
const numero2 = '30';
const numero3 = 10;
const noEsNumero = 'casa';

function imprimirNumeros(numero) {
    //validamos
    if (isNaN(numero)) {
        return `no es un dato valido: ${numero}`;
    }
    //proceso 
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

imprimirNumeros(numero);
console.log('*******otra serie de números******');
imprimirNumeros(numero3);
console.log('*******Probamos con un string******');
imprimirNumeros(numero2);
console.log('*******Probamos con un string no numérico******');
console.log(imprimirNumeros(noEsNumero));
