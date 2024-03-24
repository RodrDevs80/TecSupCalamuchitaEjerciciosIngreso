/** 
 * 136. Define una función llamada `ordenarPorPrecio` que tome una lista de objetos JSON (representando productos) y ordene la lista por precio de forma ascendente o 
descendente según un argumento.
 */
//JSON
const productos = `{
    "Producto1": {
        "nombre": "Jabón en polvo Ariel",
        "precio": "6000",
        "stock": "250"
    },
    "Producto2": {
        "nombre": "Fideos Marolio",
        "precio": "1000",
        "stock": "300"
    },
    "Producto3": {
        "nombre": "Pasta de dientes Colgate",
        "precio": "1240",
        "stock": "1400"
    },
    "Producto4": {
        "nombre": "Jabón Tocador Rexona",
        "precio": "650",
        "stock": "1000"
    }
}`
//console.table(productos);
const convertirAObjeto = (cadenaJSON) => {
    //validación con try catch
    try {
        return JSON.parse(cadenaJSON);
    } catch (error) {
        return `El dato ingresado no es valido ERROR:${error.mensaje}`
    }

};

//Version 0.1
const ordenarPorPrecio = (porDefecto = true) => {
    const objetoProductos = convertirAObjeto(productos);
    // Convertir el objeto a un array de objetos
    const arrayProductos = Object.values(objetoProductos);
    if (porDefecto) {
        arrayProductos.sort((a, b) => {
            const { precio: aPrecio } = a;
            const { precio: bPrecio } = b;
            return aPrecio - bPrecio;
        })
        return arrayProductos;
    } else {
        arrayProductos.sort((a, b) => {
            const { precio: aPrecio } = a;
            const { precio: bPrecio } = b;
            return bPrecio - aPrecio;
        })
        return arrayProductos;
    }
}
//por defecto!!
console.log('*******Version 0.1*******');
console.log('****Ordenación Ascendente*******');
ordenarPorPrecio().forEach((producto) => {
    console.log(producto.nombre + ' $' + producto.precio);
});
console.log('****Ordenación Descendente*******');
//asigno false
ordenarPorPrecio(false).forEach((producto) => {
    console.log(producto.nombre + ' $' + producto.precio);
});
console.log('*******Version 0.1.1*******');
//Version 0.1.1
const ordenarPorPrecio2 = (porDefecto = true) => {
    let resultado;
    const objetoProductos = convertirAObjeto(productos);
    // Convertir el objeto a un array de objetos
    const arrayProductos = Object.values(objetoProductos);
    //verifico el valor de porDefecto con Operador Ternario
    porDefecto ? resultado = arrayProductos.sort((a, b) => {
        const { precio: aPrecio } = a;
        const { precio: bPrecio } = b;
        return aPrecio - bPrecio;
    }) : resultado = arrayProductos.sort((a, b) => {
        const { precio: aPrecio } = a;
        const { precio: bPrecio } = b;
        return bPrecio - aPrecio;
    })

    return resultado;
};

//por defecto!!
console.log('****Ordenación Ascendente*******');
ordenarPorPrecio2().forEach((producto) => {
    console.log(producto.nombre + ' $' + producto.precio);
});
console.log('****Ordenación Descendente*******');
//asigno false
ordenarPorPrecio2(false).forEach((producto) => {
    console.log(producto.nombre + ' $' + producto.precio);
});







