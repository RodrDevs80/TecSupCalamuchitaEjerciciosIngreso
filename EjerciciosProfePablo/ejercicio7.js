/**
 * 7-Implementa una función llamada reemplazarVocales que tome una cadena de texto como parámetro y devuelva una nueva cadena donde todas las vocales se reemplacen por un guion bajo (_). Utiliza un ciclo for para iterar sobre la cadena original.
 */

const cadena = 'Hay examen este miercoles';
const numero = 1234534;

const reemplazarVocales = (cadena) => {
    let cadenaNueva = '';
    if (typeof cadena !== 'string') {
        return console.log('El valor ingresado no es valido!');
    }

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == 'a') {
            cadenaNueva += '_';

        } else if (cadena[i] == 'e') {
            cadenaNueva += '_';

        } else if (cadena[i] == 'i') {
            cadenaNueva += '_';

        } else if (cadena[i] == 'o') {
            cadenaNueva += '_';

        } else if (cadena[i] == 'u') {
            cadenaNueva += '_';

        } else {
            cadenaNueva += cadena[i];
        }
    }
    return console.log(cadenaNueva);
}
console.log('*****original*******');
console.log(cadena);
console.log('*****modificado*******');
reemplazarVocales(cadena);
console.log('***********************************');
reemplazarVocales(numero);