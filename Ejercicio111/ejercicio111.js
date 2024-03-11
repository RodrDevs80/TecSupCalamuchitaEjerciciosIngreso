/*111. Crea una página HTML con un botón. Utiliza JavaScript para mostrar un mensaje en 
un cuadro de alerta cuando se hace clic en el botón
 */

const btnMensaje = document.getElementById('mensaje');
btnMensaje.addEventListener('click', (e) => {
    alert('Usted hizo click sobre el botón!');
})