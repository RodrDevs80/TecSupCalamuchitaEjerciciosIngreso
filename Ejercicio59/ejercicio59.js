/*59. Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una 
estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en 
función de la hora
 */

const hora = 19;
const esDia = hora >= 7 && hora <= 12;
const esNoche = hora >= 20 && hora <= 6;

if (esDia) {
  console.log("Buenos Dias!");
} else if (esNoche) {
  console.log("Buenas Noches!");
} else {
  console.log("Buenas Tardes!");
}
