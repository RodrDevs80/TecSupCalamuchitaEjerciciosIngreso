/*96. Agrega una imagen en tu página y utiliza JavaScript para mostrar un mensaje cuando 
el usuario pase el cursor sobre la imagen.
 */
const img = document.getElementById('img');

img.addEventListener('mouseover', (evento) => {
    alert("El cursor esta sobre la imagen!!!")
})
//saliendo dec la imagen!!!
// img.addEventListener('mouseout', (evento) => {
//     alert("El cursor esta saliendo de la imagen!!!")
// })

