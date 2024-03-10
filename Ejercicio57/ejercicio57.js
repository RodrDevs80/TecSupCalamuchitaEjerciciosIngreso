/*57. Define una variable `numero` y verifica si es positivo, negativo o igual a cero utilizando
una declaración if y muestra el resultado en consola
 */

const numero = 0;
const esPositivo = numero > 0;
const esCero = numero === 0;
//verifico si es un numero
if (typeof numero === "number") {
  if (esPositivo) {
    console.log("El numero es positivo");
  } else if (esCero) {
    console.log("El numero es cero");
  } else {
    console.log("El numero es negativo");
  }
} else {
  console.log("El dato ingresado no es un numero");
}
