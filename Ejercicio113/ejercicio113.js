/*113. Agrega una lista (`<ul>`) con varios elementos de lista (`<li>`) a tu página HTML. 
Utiliza JavaScript para seleccionar todos los elementos de lista y mostrarlos en la consola
uno por uno.
 */

const items = document.querySelectorAll('li');
items.forEach((item) => {
    console.log(item);
})
