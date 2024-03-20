/*124. Define una función llamada `buscarIndice` que tome un array y un elemento como 
argumentos, y devuelva el índice de ese elemento en el array.
 */
const frutas = ["manzana", "banana", "naranja", "fresa", "kiwi", "uva", "sandía", "uva"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//forma 1
const buscarIndice = (array, elementoBuscado) => {
    const seEncontro = array.findIndex((elemento) => elemento === elementoBuscado);
    if (seEncontro === -1) {
        return 'No se encontró el elemento buscado';
    }
    return `El elemento buscado esta el el indice ${seEncontro} del vector!`
}
console.log(buscarIndice(frutas, 'naranja'));
console.log(buscarIndice(frutas, 'pera'));
console.log(buscarIndice(numeros, 10));
console.log(buscarIndice(numeros, 20));
//forma 2
const elementoBuscado = "naranja";

console.log('*****************************************');
function buscarIndice2(array, elementoBuscado) {
    let seEncontro = `El elemento buscado no se encontró!`;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementoBuscado) {
            seEncontro = `El elemento buscado esta en el indice ${i}`;
        }
    }
    return seEncontro;
}

console.log(buscarIndice2(frutas, elementoBuscado));
console.log(buscarIndice2(frutas, 'pera'));
console.log(buscarIndice2(numeros, 10));
console.log(buscarIndice2(numeros, 'pera'));

console.log('*****************************************');
function buscarIndice3(array, elementoBuscado) {
    let seEncontro = false;
    let indice = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementoBuscado) {
            seEncontro = true
            indice = i;
        }
    }
    return seEncontro ? `El elemento buscado esta en el indice ${indice}` : `El elemento buscado no se encontró!`;
}
console.log(buscarIndice3(frutas, 'naranja'));
console.log(buscarIndice3(frutas, 'pera'));
console.log(buscarIndice3(numeros, 10));
console.log(buscarIndice3(numeros, 'pera'));
