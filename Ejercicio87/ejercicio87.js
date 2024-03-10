/*87. Crea una función llamada `calcularDescuento` que tome un precio y un porcentaje de 
descuento como argumentos. La función debe calcular el precio final con descuento y 
mostrarlo en la consola;
 */

const calcularDescuento = (precio, porcentaje) => {

    const descuento = (precio * porcentaje) / 100;
    console.log(`El precio sin descuento es de $${precio},el descuento es de ${porcentaje}%, por lo que el precio final seria de $${precio - descuento}`);
}

calcularDescuento(500, 25);