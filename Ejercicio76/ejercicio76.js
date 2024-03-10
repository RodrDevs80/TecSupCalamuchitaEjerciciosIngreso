/*76. Crea un arreglo de palabras y utiliza un bucle `for` para concatenar todas las palabras 
en una sola cadena y mostrarla en la consola.
 */

const palabras = ['Hola', 'soy', 'Carlos', 'y', 'estoy', 'programando'];
let cadena = '';
for (let i = 0; i < palabras.length; i++) {
    cadena = cadena + palabras[i] + ' ';
}
console.log(cadena);