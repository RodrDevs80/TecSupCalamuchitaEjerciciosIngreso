/*69- Crea una función llamada ordenarArray que tome un arreglo de números como 
argumento y retorne un nuevo arreglo con los números ordenados de manera 
ascendente.
 */

const ordenarArray = (arregloNumeros) => {
    //verificando que el array sea de números 
    const esArrayDeNumeros = arregloNumeros.every(num => typeof num === 'number')
    if (!esArrayDeNumeros) {
        return 'El arreglo ingresado no es valido'
    }
    // se le pasa esta función flecha a a sort, por que sino este ordena  mal 
    // dado este --> const arreglo = [5, 2, 4, 1, 3, 10]; --da como resultado [1, 10, 2, 3, 4, 5]
    //de esta forma se corrige.
    const arregloOrdenado = arregloNumeros.sort((a, b) => {
        return a - b;
    });

    return arregloOrdenado;

}
const arreglo = [5, 2, 4, 1, 3, 10];

const resultado = ordenarArray(arreglo);
console.log(resultado);