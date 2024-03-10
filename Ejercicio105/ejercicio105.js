/*105.Crea una función llamada `calcularTotalCompra` que tome un objeto con 
propiedades `carrito` (un objeto con productos y cantidades) y `productos` (un objeto con 
productos y precios) como argumentos, y devuelva el total de la compra.
 */
const objeto = {
    carrito: {
        producto1: 2,
        producto2: 1,
    },
    productos: {
        producto1: 10.99,
        producto2: 5.49,
    }
};

//console.log(objeto.carrito.producto1 * objeto.productos.producto1);
//console.log(objeto.carrito.producto2 * objeto.productos.producto2);
//console.log(objeto.carrito.producto1 * objeto.productos.producto1 + objeto.carrito.producto2 * objeto.productos.producto2);

const calcularTotalCompra = (objeto) => {
    let total = 0;
    const carrito = objeto.carrito;
    const productos = objeto.productos;

    for (const producto in carrito) {
        total += productos[producto] * carrito[producto];
    }
    return total;
}

console.log('total de la compra', calcularTotalCompra(objeto));

