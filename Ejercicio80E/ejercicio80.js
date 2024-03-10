/*80. Define un arreglo de números y utiliza un bucle `for` para encontrar el número más grande en el arreglo y mostrarlo en la consola.
 */

const numeros = [5, 2, 8, 1, 10, 4, 7, 20, 13, 3, 6, 9, 23];
let maximo = 0;
for (let i = 0; i < numeros.length; i++) {
    if (maximo < numeros[i]) {
        maximo = numeros[i];
    }
}
console.log(maximo);