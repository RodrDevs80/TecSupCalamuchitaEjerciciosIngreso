/**52. Define una variable llamada `puntuacion` y asigna un valor numérico entre 0 y 100. Utiliza una estructura condicional `if...else` para mostrar un mensaje en la consola que 
indique si la puntuación es "Aprobada" (si es mayor o igual a 60) o "Reprobada" (si es 
menor a 60).*/
const puntuacion = 60;
const aprobada = puntuacion >= 60;

if (aprobada) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}
