/** 
 * 134. Define una función llamada `filtrarPorEdad` que tome una lista de objetos JSON (representando personas) y un valor de edad. La función debe devolver una lista de las 
personas que tienen esa edad
 */
//JSON

//Json 
const listaDePersonas = `{
    "Juan Carlos": "34",
    "Pedro Lomas": "83",
    "Omar Ramirez": "24",
    "Lara Riquelme": "32",
    "Sofia Soros": "24",
    "Jose luis": "15"
}`;

const convertirAObjeto = (cadenaJSON) => {
    //validación con try catch
    try {
        return JSON.parse(cadenaJSON);
    } catch (error) {
        return `El dato ingresado no es valido ERROR:${error.mensaje}`
    }

}


const filtrarPorEdad = (personas, edadBuscada) => {
    //Paso JSON a objeto
    const objetoListaDePersonas = convertirAObjeto(personas);
    let personaEncontrada = {}
    //recorro las entradas con un for
    let entradas = Object.entries(objetoListaDePersonas);
    for (const persona of entradas) {
        const [clave, valor] = persona;
        if (valor == edadBuscada) {
            personaEncontrada[clave] = valor;
        }

    }
    //compruebo si el objeto esta vacío y retorno en consecuencia!
    return Object.keys(personaEncontrada).length ? personaEncontrada : `No hay ninguna persona con la edad buscada ${edadBuscada} años`;
}

console.log(filtrarPorEdad(listaDePersonas, 24));
console.log(filtrarPorEdad(listaDePersonas, 5));
console.log(filtrarPorEdad(listaDePersonas, 15));
console.log(filtrarPorEdad(listaDePersonas, '80'));
console.log(filtrarPorEdad(listaDePersonas, '83'));





