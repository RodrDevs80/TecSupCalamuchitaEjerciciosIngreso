/*Calcular el máximo de tres números en distintas formas;
 */
//Forma 1 
//variables
const num1 = 1;
const num2 = 11;
const num3 = 7;
const num4 = 21;
let mayor = 0;
//Casos particulares Todos iguales o 2 iguales
if (num1 === num2 && num2 === num3) {
    mayor = num1;
} else if (num1 === num2 && num2 > num3) {
    mayor = num2;
} else if (num3 === num2 && num3 > num1) {
    mayor = num3;
} else if (num1 === num3 && num1 > num2) {
    mayor = num1;
} else {
    //Todos distintos
    if (num1 > num2 && num1 > num3) {
        mayor = num1;
    } else if (num2 > num1 && num2 > num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

}
//resultado
console.log(mayor);
// function promedioDeNumeros(numeros) {
//     return numeros.reduce((suma, numero) => suma + numero, 0) / numeros.length;
// }
// const n = [5, 5, 5, 5];
// console.log(promedioDeNumeros(n));


//forma 2 
function calcularElMayorDeTresNumeros(...num1) {
    //...variable me permite poner una cantidad indeterminada de argumentos en una función
    return Math.max(...num1);
}
console.log(calcularElMayorDeTresNumeros(num1, num2, num3, num4));

//forma 3
const tresNumeros = [1, 11, 7];
let max = 0;
for (let i = 0; i < tresNumeros.length; i++) {
    if (tresNumeros[i] > max) {
        max = tresNumeros[i];
    }
}
console.log(max);
//forma 4 con función fecha y bucle for
const encontrarElMax3Num = (arreglo) => {
    let max = 0;
    for (let i = 0; i < tresNumeros.length; i++) {
        if (tresNumeros[i] > max) {
            max = tresNumeros[i];
        }
    }
    return max;
}
console.log(encontrarElMax3Num(tresNumeros));
//forma 5 con forEach
let max1 = 0;
tresNumeros.forEach((numero) => {
    if (numero > max1) {
        max1 = numero
    }
})
console.log(max1);
//forma 6 función con forEach
function maximo(vector) {
    let max1 = 0;
    vector.forEach((numero) => {
        if (numero > max1) {
            max1 = numero
        }
    })
    return max1;
}
console.log(maximo(tresNumeros));
//forma 7 con ordenamiento 
//variables
const numeros = [1, 11, 7]
//se ordena el array
const numerosOrdenados = numeros.sort((a, b) => { return a - b });
//guardo el ultimo por ser el mayor
const elMayor = numerosOrdenados[numerosOrdenados.length - 1];
//salida muestro el mayor
console.log(elMayor);
