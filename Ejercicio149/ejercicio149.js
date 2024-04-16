/*
149. Conversor de Monedas:
Diseña un conversor de monedas en HTML con campos para ingresar la cantidad en una 
moneda y seleccionar la moneda de destino. Utiliza JavaScript para realizar la conversión 
en tiempo real y muestra el resultado. Agrega estilos CSS para mejorar la presentación.
 */
const monto = document.getElementById('monto');
const tipoDeCambioInicial = document.getElementById('seleccion1');
const tipoDeCambioFinal = document.getElementById('seleccion2');
const progresoBarra = document.getElementById('progreso');
const btnCovertir = document.getElementById('btn-convertir');
const modal = document.getElementById('modal');
const main = document.getElementById('main');
const btnNuevaConversion = document.getElementById('btn-nueva-conversion');
const resultado = document.getElementById('resultado');
const valorDolarPorPeso = 868.25;
const valorEuroPorPeso = 924.07;
const valorEuroPorDolar = 0.94;

function cargarBarra() {
    progresoBarra.classList.add('final');
}
function descargarBarra() {
    progresoBarra.classList.remove('final');
}
function limpiarCampos() {
    monto.value = '';
    tipoDeCambioInicial.value = '';
    tipoDeCambioFinal.value = '';
}

function calcularConversion(inicial, final, cantidad, valorDolarPorPeso, valorEuroPorDolar, valorEuroPorPeso) {
    if (inicial === final) {
        resultado.textContent = `${cantidad} ${inicial} equivalen a ${cantidad} ${final} `;
    } else if (inicial === 'pesos') {
        switch (final) {
            case 'dolares':
                resultado.textContent = `${cantidad} ${inicial} Arg. equivalen a ${(cantidad / valorDolarPorPeso).toFixed(4)} ${final} `;
                break;
            case 'euros':
                resultado.textContent = `${cantidad} ${inicial} Arg. equivalen a ${(cantidad / valorEuroPorPeso).toFixed(4)} ${final} `;
                break;
            default:
                resultado.textContent = 'no hay valor valido';
                break;
        }
    } else if (inicial === 'dolares') {
        switch (final) {
            case 'pesos':
                resultado.textContent = `${cantidad} ${inicial} equivalen a ${(cantidad * valorDolarPorPeso).toFixed(2)} ${final} `;
                break;
            case 'euros':
                resultado.textContent = `${cantidad} ${inicial} equivalen a ${(cantidad * valorEuroPorDolar).toFixed(2)} ${final} `;
                break;
            default:
                resultado.textContent = 'no hay valor valido';
                break;
        }
    } else {
        switch (final) {
            case 'pesos':
                resultado.textContent = `${cantidad} ${inicial} equivalen a ${(cantidad * valorEuroPorPeso).toFixed(2)} ${final} `;
                break;
            case 'dolares':
                resultado.textContent = `${cantidad} ${inicial} equivalen a ${(cantidad / valorEuroPorDolar).toFixed(2)} ${final} `;
                break;
            default:
                resultado.textContent = 'no hay valor valido';
                break;
        }
    }
}


btnCovertir.addEventListener('click', (e) => {
    cargarBarra();
    const montoAconvertir = Number(monto.value);
    const inicial = tipoDeCambioInicial.value;
    const final = tipoDeCambioFinal.value;
    setTimeout(() => {
        if (montoAconvertir <= 0) {
            resultado.textContent = `El valor ${montoAconvertir}, no es valido, debe ingresar un numero mayor a cero!`
        } else {
            calcularConversion(inicial, final, montoAconvertir, valorDolarPorPeso, valorEuroPorDolar, valorEuroPorPeso);
        }

    }, 1000);
    if (modal.classList.contains('hide')) {
        modal.classList.remove('hide');
        main.style.zIndex = '-12';
        modal.classList.add('show');
    }

})

btnNuevaConversion.addEventListener('click', (e) => {
    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
        main.style.zIndex = '1';
        modal.classList.add('hide');
        descargarBarra();
        limpiarCampos();
    }
})

