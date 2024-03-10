/**56. Crea una variable llamada `calificacion` y asígnale un valor numérico entre 0 y 100. Utiliza una estructura condicional `if...else if...else` para mostrar en la consola si la 
calificación es "Excelente," "Aprobado," o "Reprobado" según un rango de calificaciones.
 */

const calificacion = 90;
const aprobado = calificacion >= 60 && calificacion <= 80;
const excelente = calificacion >= 90;
//verifico que este en rango
if (calificacion > 0 && calificacion <= 100) {
  if (aprobado) {
    console.log(`Aprobado ${calificacion}`);
  } else if (excelente) {
    console.log(`Excelente ${calificacion}`);
  } else {
    console.log(`Desaprobado ${calificacion}`);
  }
} else {
  console.log("Calificación fuera de rango");
}
