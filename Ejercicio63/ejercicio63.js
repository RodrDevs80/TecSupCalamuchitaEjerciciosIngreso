/*63- Crea una función llamada calcularFactorial que tome un número entero positivo como 
argumento y retorne su factorial. El factorial de un número es el producto de todos los 
números enteros positivos desde 1 hasta ese número
 */
/**
 * 2!=2×1=2
1
!
=
1
1!=1
0
!
=
1
0!=1 (por convención)
 */
const calcularFactorial = (num) => {
  // Comprobación de entrada no válida
  if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
    return "Entrada inválida. El argumento debe ser un número entero no negativo.";
  }
  let factorial;
  //0!=1 (por convención)
  if (num != 0) {
    let acumulador = 1;
    for (let i = num; i > 0; i--) {
      acumulador *= i;
    }
    factorial = acumulador;
  } else {
    factorial = 1;
  }
  return factorial;
};

console.log(calcularFactorial(10));
