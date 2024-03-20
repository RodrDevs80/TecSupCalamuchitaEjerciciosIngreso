/**
 * 127. Define una función llamada `encontrarMayor` que tome una matriz de números como
 * argumento y devuelva el número mayor de la matriz.
 */
//forma tradicional
const matrizBidimensional = [
    [1, 34, 3, 4, 5, 6],
    [7, 8, 22, 10, 99, 12],
    [13, 25, 15, 81, 17, 18],
];

const encontrarMayor = (matriz) => {
    let mayor = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > mayor) {
                mayor = matriz[i][j];
            }
        }

    }
    return mayor;
}
console.log(encontrarMayor(matrizBidimensional));

//forma acotada
function encontrarMayor2(matriz) {
    return Math.max.apply(null, matriz.flat());
}

console.log(encontrarMayor2(matrizBidimensional));




