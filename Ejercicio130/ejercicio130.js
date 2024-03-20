/** 
 * 130. Crea una matriz de objetos donde cada objeto represente un producto con 
propiedades como `nombre`, `precio`, y `cantidad`. Calcula el valor total de todos los 
productos en la matriz.
 */
//matriz de promedios 
const matrizProductos = [
    [producto1 = {
        nombre: 'Perfume Avon',
        precio: 25,
        cantidad: 3,
    }, producto2 = {
        nombre: 'Vela Aromática',
        precio: 5,
        cantidad: 20,
    }, producto3 = {
        nombre: 'Jabón',
        precio: 10,
        cantidad: 8,
    }],
    [producto3 = {
        nombre: 'fideos',
        precio: 13,
        cantidad: 4,
    }, producto4 = {
        nombre: 'Arroz',
        precio: 10,
        cantidad: 10,
    }, producto5 = {
        nombre: 'Galletas',
        precio: 9,
        cantidad: 10,
    }],
    [producto4 = {
        nombre: 'Tomate',
        precio: 4,
        cantidad: 4,
    }, producto5 = {
        nombre: 'Cebolla',
        precio: 3,
        cantidad: 5,
    }, producto6 = {
        nombre: 'Ajo',
        precio: 5,
        cantidad: 2,
    }]

];

let valoresTotalesDeLosProductos = 0;

for (let i = 0; i < matrizProductos.length; i++) {
    let precioTotal = 0;
    for (let j = 0; j < matrizProductos[i].length; j++) {
        //console.log(matrizProductos[i][j]);
        precioTotal = matrizProductos[i][j].cantidad * matrizProductos[i][j].precio;
        //console.log(precioTotal);
        valoresTotalesDeLosProductos += precioTotal;
        //console.log(valoresTotalesDeLosProductos);
    }

}


console.log('*************************************');
console.log(valoresTotalesDeLosProductos);