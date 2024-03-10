/*95. Crea un botón que cambie el color de fondo de la página a un color aleatorio cada vez 
que sea clicado.
 */

const btn = document.getElementById('btn');
btn.addEventListener('click', (evento) => {

    //const colores = ['rgb(255, 0, 0)', 'rgb(0, 128, 0)', 'rgb(255, 255, 0)', 'rgb(139, 69, 19)', 'rgb(148, 0, 211)', 'rgb(0, 191, 255)'];
    let color1 = (Math.random() * 255).toFixed();
    let color2 = (Math.random() * 255).toFixed();
    let color3 = (Math.random() * 255).toFixed();
    document.body.style.background = `rgb(${color1},${color2},${color3})`;
})
