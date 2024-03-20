/** 
 * 131. Crea un objeto JSON que represente información de un estudiante, incluyendo 
`nombre`, `edad`, y `curso`. Muestra este objeto en la consola
 */
//JSON
/**
 * JSON valido
 * {
    "nombre": "Juan Pérez",
    "edad": 20,
    "curso": "Introducción a la Programación"
   }
 */
//ponerlo siempre en una variable???
const jsonEstudiante = {
    "nombre": "Brendan Eich",
    "edad": 20,
    "curso": "Introducción a la Programación (Javascript)"
};
const stringEstudiante = `{
    "nombre": "Juan Rulfo",
    "edad": 50,
    "curso": "Introducción a la literatura fantástica"
}`;
//Objeto Javascript 
const objetoEstudiante = {
    nombre: 'Niccolo Paganini',
    edad: 24,
    curso: 'Introducción a al Música (Instrumento violin)'
}
//¿Semejanzas y diferencias?
//JSON.stringify -> transforma un JSON a string
const datosEstudianteString = JSON.stringify(jsonEstudiante);
//JSON.parse -> pasa un string con formato JSON a Objeto Javascript
const datosEstudianteObjeto = JSON.parse(datosEstudianteString);
const datosEstudianteObjeto2 = JSON.parse(stringEstudiante);

console.log(datosEstudianteString);
console.log(datosEstudianteObjeto);
console.log(datosEstudianteObjeto2);
console.log(jsonEstudiante);
console.log(objetoEstudiante);