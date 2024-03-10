/**45. Define una variable llamada `numero1` y otra llamada `numero2`. Realiza una operación aritmética (suma, resta, multiplicación o división) con estas variables y muestra 
el resultado en la consola. */
const numero1 = 33;
const numero2 = 240;
const suma = numero1 + numero2;
const resta = numero2 - numero1;
const multiplicacion = numero1 * numero2;
const division = numero2 / numero1;
console.log(`El resultado de la suma entre ${numero1} y ${numero2} es ${suma}`);
console.log(
  `El resultado de la resta entre ${numero2} y ${numero1} es ${resta}`
);
console.log(
  `El resultado de la multiplicación entre ${numero1} y ${numero2} es ${multiplicacion}`
);
console.log(
  `El resultado de la division entre ${numero2} y ${numero1} es ${division.toFixed(
    2
  )}`
);
