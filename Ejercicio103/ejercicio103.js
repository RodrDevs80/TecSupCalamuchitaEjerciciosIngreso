/*103. Crea una función llamada `buscarLibro` que tome un objeto con propiedades `libros` 
(un arreglo de objetos de libros) y un `titulo` como argumento, y devuelva el objeto del 
libro con ese título
 */
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

//console.log(objeto.libros[1].titulo);

const buscarLibro = (objeto, titulo) => {
    let resultado = 'No se encontró el titulo buscado!';

    for (let i = 0; i < objeto.libros.length; i++) {
        if (objeto.libros[i].titulo === titulo) {
            resultado = objeto.libros[i];
        }
    }
    return resultado;
}
console.log(buscarLibro(objeto, '1984'));