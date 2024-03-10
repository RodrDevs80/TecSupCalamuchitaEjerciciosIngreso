/**48. Crea una variable llamada `radio` y asígnale el radio de un círculo. Calcula el área del 
círculo utilizando la fórmula `A = π * r^2` y muestra el resultado en la consola. */
const radio = 20;

function calcularAreaDelCirculo(r) {
  return Math.PI * r ** 2;
}
const resultado = calcularAreaDelCirculo(radio);
console.log(`El area del circulo es ${resultado.toFixed()}`);
