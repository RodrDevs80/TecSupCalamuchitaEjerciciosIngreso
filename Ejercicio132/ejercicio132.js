/** 
 * 132. Define una función llamada `convertirAJSON` que tome un objeto JavaScript y lo
 * convierta a una cadena JSON. Luego, muestra la cadena JSON en la consola.
 */
//JSON

//Objeto Javascript 
const objetoEstudiante = {
    nombre: 'Niccolo Paganini',
    edad: 24,
    curso: 'Introducción a al Música (Instrumento violin)'
}

const convertirAJSON = (objetoJSON) => {
    //validar que sea un objeto
    if (typeof objetoJSON !== 'object') {
        return 'ERROR: el dato que intenta convertir no es un objeto!'
    }
    return JSON.stringify(objetoJSON);
}
//probar otra forma de validar 
const convertirAJSON2 = (objetoJSON) => {
    //validar que sea un objeto
    if (objetoJSON instanceof Object) {
        return JSON.stringify(objetoJSON);
    }
    return 'ERROR: el dato que intenta convertir no es un objeto!'

}
//otra-> Importante : no funciona pasa cualquier cosa!!!
// const convertirAJSON3 = (objetoJSON) => {
//     //validar que sea un objeto
//     try {
//         return JSON.stringify(objetoJSON);
//     } catch (error) {
//         return `${error}: el dato que intenta convertir no es un objeto!`;

//     }


// }
console.log('**********Function 1****************');
console.log(convertirAJSON(objetoEstudiante));
console.log(convertirAJSON('hola soy un error'));
console.log('**********Function 2****************');
console.log(convertirAJSON2(objetoEstudiante));
console.log(convertirAJSON2('hola soy un error'));
//console.log('**********Function 3****************');
//console.log(convertirAJSON3(objetoEstudiante));
//console.log(convertirAJSON3(3));


