/*
148. Calculadora de Propina: 
Crea una calculadora de propina en HTML con campos para la cantidad total y el 
porcentaje de propina. Utiliza JavaScript para calcular la propina y el total a pagar. Agrega 
estilos CSS para mejorar el diseño.
 */
const totalAPagar = document.getElementById('total-a-pagar');
const porcentaje = document.getElementById('porcentaje');
const distribucion = document.getElementById('distribucion');
const btnCalcular = document.getElementById('calcular');
const txtTotalPropina = document.getElementById('txt-total-propina');
const totalPropina = document.getElementById('total-propina');
const txtPropinaPorMozo = document.getElementById('txt-propina-por-mozo');
const propinaPOrMozo = document.getElementById('propina-por-mozo');

function calcularPropina(totalCuenta, porcentajeDePropina, cantidadDeMozos) {
    if (!isNaN(totalCuenta) || !isNaN(porcentajeDePropina) || !isNaN(cantidadDeMozos)) {
        const totalApagarNumber = Number(totalCuenta);
        const porcentajeNumber = Number(porcentajeDePropina);
        const distribucionNumber = Number(cantidadDeMozos);
        const propinaPorMozo = ((totalApagarNumber * porcentajeNumber) / 100) / distribucionNumber;
        return propinaPorMozo;
    } else {
        return;
    }
}

btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();
    const resultado = calcularPropina(totalAPagar.value, porcentaje.value, distribucion.value);
    console.log(resultado);
    if (isNaN(resultado)) {
        txtTotalPropina.style.color = 'red';
        txtTotalPropina.textContent = 'Alguno de los datos ingresados no es valido!!!';
        totalPropina.style.display = 'none';
        txtPropinaPorMozo.style.display = 'none';
        propinaPOrMozo.style.display = 'none';
        totalAPagar.value = '';
        porcentaje.value = '';
        distribucion.value = '';
    } else {
        txtTotalPropina.style.color = '#000';
        txtTotalPropina.textContent = 'Total de Propina';
        totalPropina.style.display = 'inline';
        txtPropinaPorMozo.style.display = 'inline';
        propinaPOrMozo.style.display = 'inline';
        totalPropina.textContent = `$${resultado * (Number(distribucion.value))}`;
        propinaPOrMozo.textContent = `$${resultado}`;
    }
})


