/*el 103… la funcion de busqueda te paso otra idea usando “find”*/

const objeto = {
    libros: [libro1 = {
        titulo: 'Lobo Estepario',
        autor: 'Hesse'
    },
    libro2 = {
        titulo: 'Cien años de soledad',
        autor: 'García Márquez'
    },
    libro3 = {
        titulo: 'El amor en los tiempos del cólera',
        autor: 'García Márquez'
    },
    libro4 = {
        titulo: '1984',
        autor: 'George Orwell'
    }]
}

const buscarLibro = (objeto, titulo) => {
    //manejo de errores
    if (!objeto || !objeto.libros || !objeto.libros.length) {
        return "No se encontraron libros.";
    }
    const libroEncontrado = objeto.libros.find((libro) => libro.titulo === titulo);
    return libroEncontrado ? libroEncontrado : 'No se encontró el título buscado!';
}
/*lo mimos para el 104… usando “filter”*/

const filtrarProductos = (objeto, precioMaximo) => {
    if (precioMaximo < 0 || typeof precioMaximo !== 'number' || objeto.productos.some(producto => producto.precioMaximo < 0 || typeof producto.precioMaximo !== 'number')) {
        return 'Alguno de los datos ingresados no es válido';
    }

    const resultado = objeto.productos.filter(producto => producto.precioMaximo <= precioMaximo);

    return resultado.length > 0 ? resultado : 'No hay productos dentro del rango especificado.';
}

console.log(buscarLibro(objeto, '1984'));