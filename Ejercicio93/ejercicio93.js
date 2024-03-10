/*93. Crea un botón en tu página y utiliza JavaScript para cambiar el texto de un elemento 
`<p>` cuando el botón sea clicado
 */

const btn = document.querySelector('#btn');
const txt = document.querySelector('#texto');

btn.addEventListener('click', (evento) => {
    txt.textContent = 'Alguien hizo click en el botón!!!'
})