/*89. Define una variable global llamada `nombre` y asígnale tu nombre. Luego, crea una función llamada `saludarPersonalizado` que utilice la variable `nombre` para mostrar un 
mensaje personalizado en la consola.
 */

const nombre = 'Carlos';
function saludarPersonalizado(nombre) {
    if (typeof nombre !== 'string') {
        return 'El dato ingresado no es un string';
    }
    return `Hola ${nombre}!!!`;
}

console.log(saludarPersonalizado(nombre));
console.log(saludarPersonalizado(5)); 