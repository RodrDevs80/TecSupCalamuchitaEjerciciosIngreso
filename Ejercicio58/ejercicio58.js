/*58. Escribe una función llamada `esPar` que tome un número como argumento y retorne 
`true` si es par o `false` si es impar. Luego, muestra el resultado en la consola.
 */

const numero = 8;
function esPar(mun) {
  if (mun % 2 === 0) {
    return true;
  }
  return false;
}

const resultado = esPar(numero);
console.log(resultado);
