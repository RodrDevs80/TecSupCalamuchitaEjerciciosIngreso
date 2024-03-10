/**47. Define una variable llamada `precioProducto` y otra llamada `cantidadComprada`. Calcula el costo total de la compra multiplicando estas variables y muestra el resultado en 
la consola */
const precioProducto = 200;
const cantidadComprada = 5;

function costoTotal(precio, cantidad) {
  return precio * cantidad;
}
const resultado = costoTotal(precioProducto, cantidadComprada);
console.log(`El costo total de la compra es ${resultado}`);
