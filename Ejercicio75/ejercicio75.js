/*75. Escribe un bucle `for` que recorra los números del 1 al 20. Dentro del bucle, verifica si 
cada número es par o impar y muestra un mensaje correspondiente en la consola
 */

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log('El numero es par: ' + i);
    } else {
        console.log('El numero es impar: ' + i);
    }
}
