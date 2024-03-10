/*65- Define una función llamada esPangrama que tome una cadena de texto como 
argumento y determine si es un pangrama. Un pangrama es una frase que contiene todas 
las letras del alfabeto al menos una vez
 */

const esPangrama = (cadena) => {
  //variables 
  const abecedario = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Comprobación de entrada no válida
  if (typeof cadena !== "string") {
    return "Entrada inválida. El argumento debe ser una cadena de texto.";
  }
  //manipulando la cadena
  const arreglo = cadena.toLowerCase().replace(/\s/g, "").split("");
  //comprobando si el arreglo es mas corto que abecedario
  if (arreglo.length < abecedario.length) {
    return 'No es un pangrama'
  }

  //console.log(arreglo);
  for (let i = 0; i < abecedario.length; i++) {
    if (!arreglo.includes(abecedario[i])) {
      return "No es un pangrama: Falta la letra \"" + abecedario[i] + "\". ";
    }
  }
  return "Es un pangrama!!!";
};

//ejemplos de pangrama
const pangrama1 =
  "El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesaba un kilo";
const pangrama2 = "El veloz murciélago hindú comía feliz cardillo y kiwi";
const pangrama3 =
  "El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a su querido cachorro";
const pangrama4 = "José compró una vieja zampoña en Perú";


console.log(esPangrama(pangrama1));