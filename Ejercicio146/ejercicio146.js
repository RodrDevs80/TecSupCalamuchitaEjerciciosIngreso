/*
146. Contador de Clics: 
Crea un botón en HTML que cuente cuántas veces se hace clic en él y muestra el número 
en la página utilizando JavaScript. Agrega estilos CSS para que el botón sea atractivo
 */
const btn = document.querySelector('#btn-clics');
const contadorDeClics = document.querySelector('#numero-de-clics');
let contador = 0;
btn.addEventListener('click', (e) => {
    contador++;
    contadorDeClics.textContent = `${contador}`;
})


