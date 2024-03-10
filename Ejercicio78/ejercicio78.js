/*78. Crea un bucle `while` que genere números aleatorios entre 1 y 10 hasta que se 
genere un 7. Muestra los números generados en la consola.
 */
let numero;
while (numero !== '7') {
    numero = (Math.random() * 10).toFixed();
    console.log(numero);
}

