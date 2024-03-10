/*64- Escribe una función llamada contarPalabras que tome una cadena de texto como 
argumento y retorne el número de palabras en esa cadena. Supón que las palabras están 
separadas por espacios
 */

const contarPalabras = (cadena) => {
  // Comprobación de entrada no válida
  if (typeof cadena !== "string") {
    return "Entrada inválida. El argumento debe ser una cadena de texto.";
  }
  return cadena.split(" ").length;
};
const cantidadDePalbras = contarPalabras(
  "No es posible usar procesar su solicitud, Por favor intente mas tarde. Disculpe las molestias ocasionadas"
);

console.log(`La cadena tiene ${cantidadDePalbras} palabras!`);
