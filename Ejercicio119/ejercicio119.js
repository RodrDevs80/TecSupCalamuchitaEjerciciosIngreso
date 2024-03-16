/*119. Agrega un formulario a tu página HTML con un campo de texto y un botón de envío. 
Utiliza JavaScript para mostrar un mensaje en un elemento de párrafo (`<p>`) cuando se 
envía el formulario.
 */
const contenedor = document.getElementById('contenedor');
const btn = document.getElementById('btn');
const valueInput = document.getElementById('nombre');
const mensaje = document.createElement('p');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    mensaje.style.color = ' #1942be';
    mensaje.style.fontSize = '40px';
    mensaje.textContent = `Gracias ${valueInput.value}, por usar nuestro servicio!`;
    contenedor.appendChild(mensaje);
    //btn.disabled = true;
    valueInput.value = '';
})