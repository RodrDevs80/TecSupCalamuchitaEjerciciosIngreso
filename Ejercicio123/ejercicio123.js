/*123. Crea un array con nombres de frutas. Utiliza un bucle `for` para recorrer el array y 
mostrar cada nombre de fruta en la consola.
 */
const frutas = ["manzana", "banana", "naranja", "fresa", "kiwi", "uva", "sandía"];
//forma 1
for (let i = 0; i < frutas.length; i++) {
    console.log(`La fruta: ${frutas[i]}, esta en el lugar ${i}, del vector!`);
}

console.log('************************************');
//forma 2
frutas.forEach((fruta) => console.log(fruta));