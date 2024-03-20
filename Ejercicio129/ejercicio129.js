/**129. Define una función llamada `comprobarDiagonal` que tome una matriz cuadrada (misma cantidad de filas y columnas) y devuelva `true` si todos los elementos en la diagonal principal son iguales, o `false` en caso contrario.
 */
//matriz de promedios 
const matriz = [
    [8, 7, 8, 6, 5, 6],
    [7, 8, 9, 10, 9, 2],
    [10, 9, 8, 10, 10, 8],
    [7, 8, 9, 10, 9, 7]
];

const matriz2 = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 3, 0],
    [0, 0, 0, 0]];

const matriz3 = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]];


const comprobarDiagonal = (matriz) => {
    const valores = [];
    if (matriz.length !== matriz[0].length) {
        return 'La matriz no es cuadrada!';
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j) {
                valores.push(matriz[i][j]);
            }
        }
    }
    for (let x = 1; x < valores.length; x++) {
        if (valores[x] !== valores[0]) {
            return false;
        }
        return true;
    }

}


console.log(comprobarDiagonal(matriz));
console.log(comprobarDiagonal(matriz2));
console.log(comprobarDiagonal(matriz3));
