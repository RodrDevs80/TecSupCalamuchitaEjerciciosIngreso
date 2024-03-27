/**
 * 6-Crea una función llamada contarDigitos que tome un número como parámetro y devuelva la cantidad de dígitos que tiene. Utiliza un ciclo for para contar los dígitos.

 */

const numero = 1234526;
const numero2 = '345667';
const cadena = 'perro';

const contarDigitos = (numero) => {
    let numeroString = '';
    let contador = 0;
    if (typeof numero !== 'string' && typeof numero === 'number') {
        numeroString = String(numero);
    } else if (isNaN(numero)) {
        return console.log('Se ingreso un dato no valido!');
    } else {
        numeroString = numero;
    }
    for (let i = 0; i < numeroString.length; i++) {
        contador++;

    }
    return console.log(contador);
}

//test
contarDigitos(numero);
console.log('************************************');
contarDigitos(numero2);
console.log('************************************');
contarDigitos(cadena);