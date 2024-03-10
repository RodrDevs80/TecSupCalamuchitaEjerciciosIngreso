/*98. Agrega un formulario con un campo de texto y un botón de envío. Utiliza JavaScript 
para mostrar un mensaje en un elemento `<div>` cuando se envíe el formulario.
 */
const formulario = document.getElementById('formulario');
const enviar = () => {
    const div = document.createElement('div');
    div.innerHTML = '<p><b>Mensaje Enviado!!!</b></p>';
    formulario.replaceWith(div);
}


