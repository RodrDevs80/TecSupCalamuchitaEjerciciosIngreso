/* 
 140. Define una función llamada `actualizarPrecio` que tome una lista de objetos JSON (representando productos) y un objeto JSON con `nombre` de producto y `nuevoPrecio`. 
La función debe actualizar el precio del producto correspondiente en la lista.
 */
//JSON
const productos = `
    {
        "Producto1": {
            "nombre": "Jabón en polvo Ariel",
            "precio": 6000
        },
        "Producto2": {
            "nombre": "Fideos Marolio",
            "precio": 1000
        },
        "Producto3": {
            "nombre": "Pasta de dientes Colgate",
            "precio": 1240
        },
        "Producto4": {
            "nombre": "Jabón Tocador Rexona",
            "precio": 650
        }
    }
`
const producto = `

    {
        "nombre": "Jabón Tocador Rexona",
        "NuevoPrecio": 800
    }

`
const producto2 = `

    {
        "nombre": "Desodorante en crema Odorono",
        "NuevoPrecio": 1000
    }

`
const nuevoProducto = `

    {
        "nombre": "Desodorante en crema Odorono",
        "precio": 1400
        
    }

`
const nuevoProducto2 = `

    {
        "nombre": "Desodorante en Aerosol Dave",
        "precio": 2500
        
    }

`
const nuevoProducto3 = `

    {
        "nombre": "Desodorante en polvo para pies Veritas",
        "precio": 1300
        
    }

`

const convertirAObjeto = (cadenaJSON) => {
    //validación con try catch
    try {
        return JSON.parse(cadenaJSON);
    } catch (error) {
        return `El dato ingresado no es valido ERROR: ${error.mensaje}`
    }
};

const actualizarPrecio = (productos, producto) => {
    let bandera = false;
    const objetoProductos = convertirAObjeto(productos);
    const objetoProducto = convertirAObjeto(producto);
    for (const product in objetoProductos) {
        //console.log(objetoProductos[product].nombre, objetoProducto.nombre);
        if (objetoProductos[product].nombre === objetoProducto.nombre) {
            objetoProductos[product].precio = objetoProducto.NuevoPrecio;
            bandera = true;
        }
    }
    return bandera ? JSON.stringify(objetoProductos) : `El producto ${objetoProducto.nombre} no esta en la lista!!!`;
}

console.log('****Productos sin actualizar***');
console.log(productos);
console.log('****Productos 1° actualización de precio ***');
const productosActualizados = actualizarPrecio(productos, producto);
console.log(productosActualizados);
console.log('****Productos 2° actualización de precio, producto no encontrado***');
const productosActualizados2 = actualizarPrecio(productosActualizados, nuevoProducto);

console.log(actualizarPrecio(productosActualizados2, nuevoProducto2));


//crear función para agregar producto a la lista!

const agregarProducto = (productos, nuevoProducto) => {
    const objetoProductos = convertirAObjeto(productos);
    const objetoNuevoProducto = convertirAObjeto(nuevoProducto);
    //con un map paso el objeto a un array de objetos,con el formato clave:valor
    const arrayDeProductos = Object.entries(objetoProductos).map(([clave, valor]) => (
        {
            id: clave,
            ...valor,
        }));
    let contador = arrayDeProductos.length + 1;
    Object.assign(objetoNuevoProducto, {
        id: 'Producto' + contador
    })
    arrayDeProductos.push(objetoNuevoProducto);
    //console.log(arrayDeProductos[arrayDeProductos.length - 1]);
    // arrayDeProductos[arrayDeProductos.length - 1].id = 'Producto' + contador;
    return JSON.stringify(arrayDeProductos);
}

console.log('*****************Agregando Productos*************************');
console.log('****1° producto agregado*****');
console.log(agregarProducto(productos, nuevoProducto));
//guardo lista actualizada para insumo y agrego otro producto.
const listaActualizada = agregarProducto(productos, nuevoProducto)
console.log('****2° producto agregado*****');
console.log(agregarProducto(listaActualizada, nuevoProducto2));
const listaActualizada2 = agregarProducto(listaActualizada, nuevoProducto2)
console.log('****3° producto agregado*****');
console.log(agregarProducto(listaActualizada2, nuevoProducto3));
console.log('++++++probando actualizar precio en lista creada++++++++++++');
const listaActualizada3 = agregarProducto(listaActualizada2, nuevoProducto3);
console.log(actualizarPrecio(listaActualizada3, producto2));
