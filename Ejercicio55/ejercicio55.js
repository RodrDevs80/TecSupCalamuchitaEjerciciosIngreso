/**55. Crea una variable llamada `color` y asígnale el nombre de un color. Utiliza una serie 
de declaraciones `if...else if` para determinar si el color es "Rojo," "Verde," o "Azul," y 
muestra un mensaje correspondiente en la consola.
 */

//no lo hice en consola por que quería practicar el prompt y el alert
const color = prompt("Ingrese un color->Rojo/Verde/Azul:");

const queColorEs = (color) => {
  //verifico colores
  if (color.charAt(0).toUpperCase() + color.slice(1) === "Rojo") {
    alert(
      `El color ingresado es ${color.charAt(0).toUpperCase() + color.slice(1)}`
    );
  } else if (color.charAt(0).toUpperCase() === "Verde") {
    alert(
      `El color ingresado es ${color.charAt(0).toUpperCase() + color.slice(1)}`
    );
  } else if (color.charAt(0).toUpperCase() === "Azul") {
    alert(
      `El color ingresado es ${color.charAt(0).toUpperCase() + color.slice(1)}`
    );
  } else {
    alert(`El dato ingresado es ${color} y no es un color valido`);
  }
};
queColorEs(color);
