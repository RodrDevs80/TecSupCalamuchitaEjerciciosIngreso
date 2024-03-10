/*70- Escribe una función llamada calcularFibonacci que tome un número entero positivo 
como argumento y retorne el n-ésimo término de la secuencia de Fibonacci. La secuencia 
de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos 
términos anteriores.
 */
/**Fibonacci de 10 para control
 * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
*/

function calcularFibonacci(num) {
    const fibonacci = [0, 1];
    let contador = 2;
    if (typeof num !== 'number' && num > 0) {
        return 'El dato ingresado debe ser un entero positivo!!!'
    }
    if (num === 1) {
        return 1;
    }
    for (let i = 0; i < num - 1; i++) {
        fibonacci[contador] = fibonacci[i] + fibonacci[i + 1]
        //console.log(fibonacci);
        contador++;
    }
    return fibonacci[fibonacci.length - 1];

}

console.log(calcularFibonacci(10));
