/** 
 137. Crea un objeto JSON que represente información de una película, incluyendo `título`, 
`director`, y `año`. Luego, muestra cada propiedad en la consola 
 */
//JSON
const pelicula = `{   
        "Titulo": "Ciudadano Kane",
        "Director": "Orson Welles",
        "Año": "1941"    
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

const objetoPelicula = convertirAObjeto(pelicula);
console.log('******************************************');
for (const dato in objetoPelicula) {
    console.log(dato + ':' + objetoPelicula[dato]);
}
console.log('******************************************');
const claves = Object.keys(objetoPelicula);
for (const clave of claves) {
    console.log(`${clave}:${objetoPelicula[clave]}`);
}
console.log('******************************************');
const entradas = Object.entries(objetoPelicula);
for (const datos of entradas) {
    const [clave, dato] = datos;
    console.log(clave + ' : ' + dato);
}


