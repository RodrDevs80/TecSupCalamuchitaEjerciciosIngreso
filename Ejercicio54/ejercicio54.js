/**54. Define dos variables, `numero1` y `numero2`, y realiza una comparación para determinar cuál de los dos números es mayor. Luego, muestra el número mayor en la 
consola.
 */
const numero1 = 28;
const numero2 = 8;

const cualEsMayor = (num1, num2) => {
  //verificando si son distintos
  if (num1 != num2) {
    if (num1 > num2) {
      console.log(`El numero 1: ${num1} es mayor que el numero 2: ${num2}`);
    } else {
      console.log(`El numero 2: ${num2} es mayor que el numero 1: ${num1}`);
    }
  } else {
    console.log(`El numero 1: ${num1} es igual que el numero 2: ${num2}`);
  }
};

cualEsMayor(numero1, numero2);
