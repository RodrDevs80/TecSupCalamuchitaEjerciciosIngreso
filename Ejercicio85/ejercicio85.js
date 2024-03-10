/*85. Escribe una función llamada `revertirTexto` que tome una cadena de texto como 
argumento y devuelva la cadena invertida.
 */

const revertirTexto = (cadena) => {
    if (typeof cadena !== 'string') {
        return 'El dato ingresado no es una cadena!!!';
    }
    return cadena.split('').reverse().join('');
}
const cadena = 'Somos lo que elegimos ser';
console.log(cadena);
console.log(revertirTexto(cadena));
