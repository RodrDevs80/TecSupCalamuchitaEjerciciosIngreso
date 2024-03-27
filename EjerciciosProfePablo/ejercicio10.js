/**
 * 10-Crea una función llamada contarLetrasMayusculas que tome una cadena de texto como parámetro y devuelva la cantidad de letras mayúsculas que contiene. Utiliza un ciclo for para recorrer la cadena y un condicional if para verificar si cada carácter es una letra mayúscula.
 */
/**
 * Importante 
 * El método test() solo indica si hay o no una coincidencia, no devuelve la coincidencia en sí.
   Se puede utilizar el método exec() para obtener información detallada sobre la primera coincidencia encontrada.
 */

const cadena = 'Ordenamiento por selección: Este Algoritmo Funciona buscando el Elemento más pequeño de la lista y Colocándolo al principio. Luego, repite este Proceso con el Resto de la Lista.';
const noCadena = 1234563;
const cadena2 = 'casa';
const cadenaDeNumeros = '1223545646';
const cadenaConAlgunNumero = "La población de Capital Federal es de 3.120.612 habitantes"

const contarLetrasMayusculas = (cadena) => {
    //inicio contador en 0
    let contador = 0;
    //defino una expresion regular
    const expresionRegular = /[A-Z]/;
    //valido el dato ingresado 
    if (typeof cadena !== 'string' || !isNaN(cadena)) {
        return `El dato ingresado ${cadena}, no es valido!!!`
    }
    // proceso: busco con un for en la cadena, carácter por carácter las coincidencias con la expresión regular con un if, y aumento el contador si hay coincidencia 
    for (let i = 0; i < cadena.length; i++) {
        if (expresionRegular.test(cadena[i])) {
            contador++;
        }
    }
    //retorno contador
    return contador !== 0 ? `En la cadena hay ${contador} mayúsculas.` : 'No se encontraron mayúsculas en la cadena!!!';
}

//test
console.log(contarLetrasMayusculas(cadena));
console.log('****************************************');
console.log(contarLetrasMayusculas(cadena2));
console.log('****************************************');
console.log(contarLetrasMayusculas(noCadena));
console.log('****************************************');
console.log(contarLetrasMayusculas(cadenaDeNumeros));
console.log('****************************************');
console.log(contarLetrasMayusculas(cadenaConAlgunNumero));
console.log('****************************************');