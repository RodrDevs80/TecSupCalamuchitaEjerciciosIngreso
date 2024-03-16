/*120. Crea una página HTML con un elemento de imagen (`<img>`). Utiliza JavaScript para 
cambiar la imagen cada vez que se hace clic en ella, alternando entre dos imágenes 
diferentes.
 */
const contenedor = document.getElementById('contenedor');
const img = contenedor.querySelector('img');
let bandera = true;
img.addEventListener('click', (e) => {
    if (bandera) {
        img.setAttribute('src', './graduados.jpg');
        bandera = false;
    } else {
        img.setAttribute('src', './estudiantes.jpg');
        bandera = true;
    }

})


