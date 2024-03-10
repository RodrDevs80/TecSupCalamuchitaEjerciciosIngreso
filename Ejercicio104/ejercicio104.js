/*104. Define una función llamada `filtrarProductos` que tome un objeto con propiedades `productos` (un arreglo de objetos de productos) y un `precioMaximo` como argumento, y 
devuelva un nuevo arreglo con los productos que tienen un precio menor o igual al valor 
dado
 */
const objeto = {
    productos: [producto1 = {
        precioMaximo: 234.8

    },
    producto2 = {
        precioMaximo: 435.0

    },
    producto3 = {
        precioMaximo: 145.2

    },
    producto4 = {
        precioMaximo: 25.67

    },
    producto5 = {
        precioMaximo: 50.89

    },
    producto6 = {
        precioMaximo: 150.0

    }]
}

//console.log(objeto.productos[1].precioMaximo);

const filtrarProductos = (objeto, precioMaximo) => {
    const resultado = [];
    let bandera = false;
    //validando objeto
    for (let i = 0; i < objeto.productos.length; i++) {
        if (objeto.productos[i].precioMaximo < 0 || typeof objeto.productos[i].precioMaximo !== 'number') {
            bandera = true;
        }
    }
    //validando precioMaximo
    if (precioMaximo < 0 || typeof precioMaximo !== 'number') {
        bandera = true;
    }
    if (bandera) {
        return 'Alguno de los datos ingresados no es valido'
    }
    for (let i = 0; i < objeto.productos.length; i++) {
        if (objeto.productos[i].precioMaximo <= precioMaximo) {
            resultado.push(objeto.productos[i]);
        }
    }
    return resultado;
}
console.log(filtrarProductos(objeto, 145.2));
