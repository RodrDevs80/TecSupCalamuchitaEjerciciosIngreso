/*67- Escribe una función llamada calcularPotencia que tome dos números como 
argumento, base y exponente, y retorne el resultado de elevar la base al exponente
 */
/**
 * Tener en cuenta!!!
 * potencia en base negativa
Casos especiales:

(-1)^n = 1 para cualquier valor de n
0^n = 0 si n es diferente de 0
0^0 no está definido
 */

function calcularPotencia(base, exponente) {
    if (typeof base !== 'number' && typeof exponente !== 'number') {
        return "El tipo de dato ingresado no es correcto!!!"
    }

    if (base === 0 && exponente !== 0) {
        return 'La potencia es:' + 0;
    }

    return 'La potencia es: ' + base ** exponente;

}


console.log(calcularPotencia(2, 3));