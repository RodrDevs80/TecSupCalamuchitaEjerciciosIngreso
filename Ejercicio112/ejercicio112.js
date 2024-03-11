/*112. Crea una página HTML con tres elementos de párrafo (`<p>`). Utiliza JavaScript para 
seleccionar un elemento y cambiar su contenido por "¡Hola, DOM!"
 */

const texto = document.querySelector('p');// selecciona el primer elemento que sea un <p></p>
texto.textContent = '¡Hola, DOM!';