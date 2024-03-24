/** 
 * 133. Crea una cadena JSON que represente una lista de tareas pendientes. Luego, utiliza 
JavaScript para convertir la cadena JSON en un objeto y muestra la lista de tareas en la 
consola.
 */
//JSON

//Json 
const listaDeTareas = `{
    "Tarea 1": "Aprender HTML",
    "Tarea 2": "Aprender CSS",
    "Tarea 3": "Aprender Javascript",
    "Tarea 4": "Hacer los ejercicios de HTML",
    "Tarea 5": "Hacer los ejercicios de CSS",
    "Tarea 6": "Hacer los ejercicios de Javascript"
}`;

const convertirAObjeto = (cadenaJSON) => {
    //validación con try catch
    try {
        return JSON.parse(cadenaJSON);
    } catch (error) {
        return `El dato ingresado no es valido ERROR:${error}`
    }

}

const objetoListaDeTareas = convertirAObjeto(listaDeTareas);

console.log(objetoListaDeTareas);
console.log(typeof objetoListaDeTareas);
console.log('******MOSTRAR CON FOR IN******');
for (const item in objetoListaDeTareas) {
    console.log(`${item} : ${objetoListaDeTareas[item]}`);
}
console.log('******MOSTRAR CON FOR OF******');
const claves = Object.keys(objetoListaDeTareas);
for (const item of claves) {
    console.log(`${item}: ${objetoListaDeTareas[item]}`);
}
console.log('******Mostrar solo valores-value*****');
const valores = Object.values(objetoListaDeTareas);
for (const valor of valores) {
    console.log(valor);
}
console.log('******Mostrar entries*****');
const entradas = Object.entries(objetoListaDeTareas);
for (const entrada of entradas) {
    const [clave, valor] = entrada;
    console.log(clave, valor);
}