/*110. Define una función llamada `calcularDescuento` que tome un objeto con propiedades
`precio` y `descuento` y calcule el precio después de aplicar el descuento.
 */
const producto = {
    precio: 300,
    descuento: 25,
}
const producto1 = {
    precio: '300',
    descuento: 25,
}
const producto2 = {

}
const producto3 = {
    precio: '300',
    descuento: 'cuarenta',
}
const producto4 = {
    precio: 500,
    descuento: 45,
}


const calcularDescuento = (objeto) => {
    //verificando que el objeto no este vacío
    if (Object.keys(objeto).length === 0) {
        return 'EL objeto ingresado esta vacío!!!'
    }
    //verificando el contenido del objeto 
    if (typeof objeto.precio !== 'number' || typeof objeto.descuento !== 'number') {
        return `ERROR:Alguno de los datos no es un numero o los dos no son números!`
    }
    const precioConDescuento = objeto.precio - ((objeto.precio * objeto.descuento) / 100);
    return `El precio con descuento del ${objeto.descuento}% es de $${precioConDescuento}`
}

console.log(calcularDescuento(producto));
console.log('------------------');
console.log(calcularDescuento(producto1));
console.log('------------------');
console.log(calcularDescuento(producto2));
console.log('------------------');
console.log(calcularDescuento(producto3));
console.log('------------------');
console.log(calcularDescuento(producto4));