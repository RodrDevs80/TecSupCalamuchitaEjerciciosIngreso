/*90. Crea una función llamada `crearLista` que tome un arreglo de elementos y devuelva 
una lista ordenada (HTML) de esos elementos. Llama a la función con un arreglo de frutas 
y muestra la lista en la consola.
 */

function crearLista(datos) {
    let listaHTML = "<ol>";
    datos.forEach(dato => {
        listaHTML += `<li>${dato}</li>`;
    });
    listaHTML += "</ol>";
    return listaHTML;
}
const frutas = ["Manzana", "Banana", "Naranja", "Limón", "Sandia"];
console.log(crearLista(frutas));