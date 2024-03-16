/*116. Crea una página HTML con un botón que diga "Agregar Elemento". Utiliza JavaScript 
para agregar un nuevo párrafo (`<p>`) con contenido "Nuevo elemento" cada vez que se 
hace clic en el botón.
 */

const contenedor = document.getElementById('contenedor');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    const p = document.createElement('p');
    p.style.fontFamily = 'Poppins';
    p.style.color = '#333333';
    p.textContent = 'Nuevo Elemento';
    contenedor.appendChild(p);
})