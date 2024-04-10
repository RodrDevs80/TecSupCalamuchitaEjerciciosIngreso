/*
147. Barra de Progreso Animada: 
Crea una barra de progreso en HTML con una animación de carga. Utiliza JavaScript para 
iniciar y detener la animación, y aplica estilos CSS para personalizar la apariencia de la 
barra.
 */
const barra = document.querySelector('#barra');
const progreso = document.querySelector('#progreso');
const btnBarra = document.querySelector('#btnBarra');

//es una forma fácil de animar una barra
btnBarra.addEventListener('click', (e) => {

    if (btnBarra.textContent.includes('Iniciar')) {
        btnBarra.textContent = 'Parar';
        progreso.classList.add('final');
    }
    else if (btnBarra.textContent.includes('Parar')) {
        btnBarra.textContent = 'Iniciar';
        progreso.classList.remove('final');
    }

})