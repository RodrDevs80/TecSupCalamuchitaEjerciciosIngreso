/*61- Escribe una función llamada esPrimo que tome un número como argumento y retorne 
true si es primo o false si no lo es. Un número primo es aquel que solo es divisible por 1 y 
por sí mismo.
Importante!!!
Un número no es primo si es divisible por cualquier número natural entre 2 y su raíz cuadrada, sin dejar resto.
 */

const esPrimo = (num) => {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

console.log(esPrimo(271));
