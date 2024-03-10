/*84.Crea una función llamada `calcularPromedio` que acepte un arreglo de números como 
argumento y devuelva el promedio de esos números.
 */

const calcularPromedio = (arreglo) => {
    let bandera;
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] === 'number') {
            bandera = true;
        } else {
            bandera = false;
            break;
        }

    }

    if (!bandera) {
        return 'alguno de los datos del arreglo no es un numero!!!';
    }
    arreglo.forEach(numero => {
        suma += numero + suma;
    });
    return (suma / arreglo.length).toFixed();

}

const numeros = [5, 2, 8, 1, 10, 32, 7, 20, 19, 3, 6, 9];
console.log(calcularPromedio(numeros));
