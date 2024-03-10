/*88. Escribe una función llamada `calcularFactorial` que tome un número entero como 
argumento y calcule su factorial (por ejemplo, `5! = 5 * 4 * 3 * 2 * 1`). Muestra el resultado 
en la consola.
 */

const calcularFactorial = (num) => {
    let acumulador = 1;
    let aux = 1;
    if (typeof num !== 'number' || num < 0) {
        return 'el dato ingresado  es incorrecto, debe ser un numero entero positivo';
    }
    if (num === 0) {
        return 1;
    }
    for (let i = 1; i <= num; i++) {
        acumulador *= i;
        // console.log(acumulador);
    }
    console.log(`El factorial de ${num} es ${acumulador}`);
}
calcularFactorial(6);
