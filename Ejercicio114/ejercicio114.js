/*114. Crea una página HTML con un botón y un párrafo vacío. Utiliza JavaScript para 
cambiar el contenido del párrafo por "Texto modificado" cuando se hace clic en el botón.
 */

const btn = document.getElementById('btn');
const txt = document.getElementById('txt');

btn.addEventListener('click', (e) => {
    if (txt.textContent === '') {
        btn.textContent = 'Quitar Texto';
        txt.textContent = 'Texto modificado';
    } else {
        btn.textContent = 'Agregar Texto';
        txt.textContent = '';
    }

})


