/*77. Define un objeto con información de productos, como nombres y precios. Utiliza un bucle `for...in` para mostrar los nombres y precios de los productos en la consola
 */

const productos = {
    notebook: 700,
    tablet: 100,
    netbook: 500,
    celular: 500,
    router: 150,
    monitor: 300
};



for (const producto in productos) {
    console.log(`El producto es ${producto} y su precio es $${productos[producto]}`)
}

