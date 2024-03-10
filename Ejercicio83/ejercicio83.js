/*83. Define una función llamada `esPar` que tome un número como argumento y devuelva 
`true` si es par o `false` si es impar
 */

function esPar(num) {
    if (typeof num === 'number') {
        return 'el dato ingresado  es incorrecto, debe ser un numero entero';
    }
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const numero = 1267;
const numero1 = 12;
console.log(`¿El ${numero} es par?: ${esPar(numero)}`);
console.log(`¿El ${numero1} es par?: ${esPar(numero1)}`);