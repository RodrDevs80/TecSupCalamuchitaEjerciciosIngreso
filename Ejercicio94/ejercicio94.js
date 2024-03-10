/*94. Agrega un campo de texto en tu página y utiliza JavaScript para mostrar un mensaje 
en la consola cuando el usuario escriba algo en el campo y presione Enter
 */
/**tener eb cuenta 
 * códigos de tecla más comunes:

Enter: 13
Esc: 27
Tab: 9
Espacio: 32
F1 a F12: 112 a 123
Letras y números: 65 a 90 (para letras en mayúsculas) y 97 a 122 (para letras en minúsculas), y 48 a 57 (para números del teclado principal)
Otros caracteres especiales tienen sus propios códigos específicos.
 */

const txt = document.getElementById('txt');
txt.addEventListener('keyup', (evento) => {

    if (evento.keyCode === 13) {
        console.log('Texto ingresado', txt.value);
        txt.value = '';
    }

})