/*92. Agrega un enlace en tu página y utiliza JavaScript para mostrar un mensaje en la 
consola cuando se haga clic en el enlace.
 */

const enlace = document.getElementById('enlace');

enlace.addEventListener('click', (evento) => {
    evento.preventDefault();
    console.log("estas haciendo click en el enlace!!!");
})