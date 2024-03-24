/** 
 138. Define una función llamada `buscarPorDirector` que tome una lista de objetos JSON (representando películas) y un nombre de director como argumentos. La función debe 
devolver una lista de las películas dirigidas por ese director.
 */
//JSON
const peliculas = `{
    "pelicula1": {
        "Titulo": "Ciudadano Kane",
        "Director": "Orson Welles",
        "Año": "1941" 
    },
    "pelicula2": {
        "Titulo": "El padrino",
        "Director": "Francis Ford Coppola",
        "Año": "1972" 
    },
    "pelicula3": {
        "Titulo": "El caballero oscuro",
        "Director": "Christopher Nolan",
        "Año": "2008" 
    },
    "pelicula4": {
        "Titulo": "Pulp Fiction",
        "Director": "Quentin Tarantino",
        "Año": "1994" 
    },
    "pelicula5": {
        "Titulo": "Kill Bill",
        "Director": "Quentin Tarantino",
        "Año": "2003" 
    }

}`

const convertirAObjeto = (cadenaJSON) => {
    //validación con try catch
    try {
        return JSON.parse(cadenaJSON);
    } catch (error) {
        return `El dato ingresado no es valido ERROR:${error.mensaje}`
    }
};

//version 0.1
const buscarPorDirector = (peliculas, director) => {
    //paso el JSON a objeto
    const objetoPeliculas = convertirAObjeto(peliculas);
    //creo array para guardar resultados
    const peliculasDeDirector = [];
    //recorro el objeto
    for (const pelicula in objetoPeliculas) {
        //si encuentra coincidencia, la guarda en el array
        if (objetoPeliculas[pelicula].Director.toLowerCase() === director.toLowerCase()) {
            peliculasDeDirector.push(objetoPeliculas[pelicula]);
        }
    }
    //retorno en consecuencia con operador ternario
    return peliculasDeDirector.length !== 0 ? peliculasDeDirector : `No se encontraron peliculas del director: ${director}`
}
console.log('********v 0.1*********');
console.log(buscarPorDirector(peliculas, "quentin tarantino"));
console.log(buscarPorDirector(peliculas, "ramon ramirez"));

//version 0.1.1
const buscarPorDirector2 = (peliculas, director) => {
    //paso JSON a objeto
    const objetoPeliculas2 = convertirAObjeto(peliculas);
    // lo convierto en array
    const arrayPeliculas2 = Object.values(objetoPeliculas2);
    //filtro según la condición
    const peliculasDelDirector = arrayPeliculas2.filter((pelicula) => pelicula.Director.toLowerCase() === director.toLowerCase());
    //retorno en consecuencia con operador ternario
    return peliculasDelDirector.length !== 0 ? peliculasDelDirector : `No se encontraron peliculas del director: ${director}`
}
console.log('********v 0.1.1*********');
console.log(buscarPorDirector2(peliculas, "quentin tarantino"));
console.log(buscarPorDirector2(peliculas, "ramon ramirez"));