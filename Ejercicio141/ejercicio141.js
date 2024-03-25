/* 
141. Botón Cambia Color: 
Crea un botón en HTML. Cuando el usuario haga clic en él, cambia el color de fondo de la 
página usando JavaScript y aplícale un estilo CSS para que el botón sea más grande.
 */

const btnColor = document.getElementById('btnColor');
const cuerpo = document.body;
btnColor.addEventListener('click', (e) => {
    let color1 = (Math.random() * 225).toFixed();
    let color2 = (Math.random() * 225).toFixed();
    let color3 = (Math.random() * 225).toFixed();
    let color4 = (Math.random() * 225).toFixed();
    let color5 = (Math.random() * 225).toFixed();
    let color6 = (Math.random() * 225).toFixed();
    console.log(color1, color2, color3);
    cuerpo.style.background = `rgb(${color1},${color2},${color3})`;
    btnColor.style.background = `rgb(${color4},${color5},${color6})`;

})