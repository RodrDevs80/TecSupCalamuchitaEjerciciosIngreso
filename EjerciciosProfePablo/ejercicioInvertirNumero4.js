/* 
4-Desarrolla una función llamada invertirNumero que tome un número como parámetro y devuelva el número invertido. Por ejemplo, si se pasa el número 123, la función debería devolver 321. Utiliza un ciclo for para invertir el número.
 */

let numero = 123;
let numero2 = '123';

function invertirNumero(numero) {
    //Validaciones 
    let numeroString = '';
    let numeroInvertido = '';
    if (typeof numero === 'number') {
        numeroString = String(numero);
    } else if (typeof numero === 'string') {
        if (!isNaN(numero)) {
            numeroString = numero;
        } else {
            return `El dato ingresado: ${numero}, no es valido!`
        }

    } else {
        return `El dato ingresado: ${numero}, no es valido!`
    }
    //proceso
    for (let i = numeroString.length - 1; i >= 0; i--) {
        numeroInvertido += numeroString[i];
    }
    //retorno
    return numeroInvertido;
}

//pruebas
console.log(invertirNumero(numero));
console.log(invertirNumero(numero2));
console.log(invertirNumero(true));
console.log(invertirNumero('casa'));
