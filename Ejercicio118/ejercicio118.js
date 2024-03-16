/*118. Crea una página HTML con un botón. Utiliza JavaScript para cambiar el color de 
fondo de la página cuando se hace clic en el botón. 
 */

const cuerpo = document.querySelector('body');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    const color1 = (Math.random() * 225).toFixed();
    const color2 = (Math.random() * 225).toFixed();
    const color3 = (Math.random() * 225).toFixed();
    console.log(color1, color2, color3);
    cuerpo.style.background = `rgb(${color1},${color2},${color3})`;
})