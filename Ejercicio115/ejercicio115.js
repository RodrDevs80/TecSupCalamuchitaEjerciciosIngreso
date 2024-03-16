/*115. Agrega una imagen a tu página HTML. Utiliza JavaScript para cambiar la fuente de la 
imagen cuando se pasa el cursor sobre ella
 */

const contenedor = document.getElementById('contenedor');
const tituloImagen = contenedor.querySelector('h2');
const imgEstudiantes = document.getElementById('imgEstu');
imgEstudiantes.addEventListener('mouseover', (e) => {
    setTimeout(() => {
        tituloImagen.textContent = 'Tecnicos Superiores en DESARROLLO WEB Y APP DIGITALES'
        tituloImagen.style.background = '#000000';
        imgEstudiantes.setAttribute('src', './graduados.jpg');
    }, 1000)
})
imgEstudiantes.addEventListener('mouseout', (e) => {
    setTimeout(() => {
        tituloImagen.textContent = 'Estudiantes en DESARROLLO WEB Y APP DIGITALES'
        tituloImagen.style.background = '#eaeaea';
        imgEstudiantes.setAttribute('src', './estudiantes.jpg');
    }, 2000)
})
