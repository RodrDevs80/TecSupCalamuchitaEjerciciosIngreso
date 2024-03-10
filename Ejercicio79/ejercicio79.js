/*79. Escribe una función que imprima la tabla de multiplicar de un número específico 
utilizando un bucle `for`.
 */

const tablaDeMultiplicar = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${num} = ${i * num}`);
    }
}

tablaDeMultiplicar(6);
