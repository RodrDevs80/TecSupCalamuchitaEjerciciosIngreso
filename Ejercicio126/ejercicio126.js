/*126. Crea una matriz (array bidimensional) llamada `matriz` que represente una tabla de 
multiplicar del 2 al 5. Imprime esta matriz en la consola
 */

const matriz = [
    ['2X1=2', '2x2=4', '2x3=6', '2x4=8', '2x5=10', '2x6=12', '2x7=14', '2x8=16', '2x9=18', '2x10=20'],
    ['3X1=3', '3x2=6', '3x3=9', '3x4=12', '3x5=15', '3x6=18', '3x7=121', '3x8=24', '3x9=27', '3x10=30'],
    ['4X1=4', '4x2=8', '4x3=12', '4x4=16', '4x5=20', '4x6=24', '4x7=28', '4x8=32', '4x9=36', '4x10=40'],
    ['5X1=5', '5x2=10', '5x3=15', '5x4=20', '5x5=25', '5x6=30', '5x7=35', '5x8=40', '5x9=45', '5x10=50'],
]

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}

