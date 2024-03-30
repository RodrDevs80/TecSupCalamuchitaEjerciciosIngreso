/* 
 142. Calculadora Simple: 
Crea una calculadora en HTML con botones para números y operaciones básicas. Utiliza 
JavaScript para realizar los cálculos y mostrar el resultado en un campo de texto
 */

const displayCalculo = document.getElementById('calculo');
const displayResultado = document.getElementById('resultado');
const botonesDeNumeros = document.querySelectorAll('.valor');

let calculo = '';
function borrarTodo() {
    displayCalculo.textContent = '';
    displayResultado.textContent = '';
    calculo = '';
}

botonesDeNumeros.forEach((boton) => {
    boton.addEventListener('click', (e) => {


        if (boton.value === '=') {
            if (calculo.length === 0) {
                displayCalculo.innerHTML = '<p>No ingreso nada!</p>';
            } else {
                displayCalculo.textContent = '';
                try {
                    displayResultado.textContent = `${eval(calculo)}`;
                } catch (error) {
                    displayCalculo.innerHTML = '<p>No ingreso valores validos!</p>';
                }
            }
        } else if (boton.value === '1') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '2') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '+') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '3') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '4') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '5') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '6') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '7') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '8') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '9') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '-') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '*') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '0') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '/') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        } else if (boton.value === '.') {
            calculo += boton.value;
            displayCalculo.textContent = `${calculo}`;
        }
    })
})

