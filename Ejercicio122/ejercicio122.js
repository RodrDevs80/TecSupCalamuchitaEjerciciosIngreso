/*122. Define una función llamada `sumarElementos` que tome un array de números como
argumento y devuelva la suma de todos los elementos.
 */
const numeros = [2, 5, 6, 8, 9];
const numeros2 = [10, 'hola', 7, 2, 5];
console.log('***************************************');
//forma 1
const sumarElementos = (array) => {
    //validar que es un numero
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return 'ERROR:Alguno de los datos ingresados no es un numero!';
        }
    }
    return array.reduce((acumulador, numero) => acumulador + numero, 0);
}
console.log(sumarElementos(numeros));
console.log(sumarElementos(numeros2));

console.log('***************************************');
//forma 2
function sumarElementos2(array) {
    //validar que es un numero
    const validar = array.find((numero) => isNaN(numero));
    if (validar !== undefined) {
        return 'ERROR:Alguno de los datos ingresados no es un numero!';
    }
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
console.log(sumarElementos2(numeros));
console.log(sumarElementos2(numeros2));

console.log('***************************************');
//forma 3
const sumarElementos3 = (array) => {
    const noEsUnNUmero = array.filter((numero) => isNaN(numero));
    if (noEsUnNUmero.length > 0) {
        return 'ERROR:Alguno de los datos ingresados no es un numero!';
    }
    let sum = 0;
    array.forEach((numero) => { sum += Number(numero) });
    return sum;
}

console.log(sumarElementos3(numeros));
console.log(sumarElementos3(numeros2));