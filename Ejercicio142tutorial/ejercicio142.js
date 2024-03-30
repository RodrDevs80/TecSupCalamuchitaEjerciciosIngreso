/* 
 142. Calculadora Simple: 
Crea una calculadora en HTML con botones para números y operaciones básicas. Utiliza 
JavaScript para realizar los cálculos y mostrar el resultado en un campo de texto
 */

const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesDeNumeros = document.querySelectorAll('.numero');
const botonesDeOperadores = document.querySelectorAll('.operador');
const display = new Display(displayValorAnterior, displayValorActual);

botonesDeNumeros.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        display.agregarNumero(boton.innerHTML);
    })

})
botonesDeOperadores.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        display.computar(boton.value);
    })
})

