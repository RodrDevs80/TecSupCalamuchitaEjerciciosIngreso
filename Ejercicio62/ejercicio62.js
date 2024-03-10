/*62- Define una función llamada invierteCadena que tome una cadena de texto como 
argumento y retorne una nueva cadena con los caracteres en orden inverso
 */

let cadena = "resolviendo problemas de programación";
function invierteCadena(cadena) {
  const cInvertida = cadena.split("").reverse().join("");
  return cInvertida;
}

const cadenaInvertida = invierteCadena(cadena);
console.log(cadenaInvertida);
console.log(invierteCadena(cadenaInvertida));
