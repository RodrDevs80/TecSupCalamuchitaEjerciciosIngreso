/*60. Define tres variables `lado1`, `lado2` y `lado3` que representen las longitudes de los lados de un triángulo. Escribe una estructura condicional para determinar si el triángulo es 
equilátero (todos los lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado 
igual).
 */

const lado1 = 1;
const lado2 = 1;
const lado3 = 2;
const equilatero = lado1 === lado2 && lado2 === lado3;
const escaleno = lado1 != lado2 && lado1 != lado3 && lado2 != lado3;

if (equilatero) {
  console.log("El triangulo es EQUILÁTERO");
} else if (escaleno) {
  console.log("El triangulo es ESCALENO");
} else {
  console.log("El triangulo es ISOSCELES");
}
