/*82. Escribe una función llamada `sumar` que tome dos argumentos y devuelva la suma de 
esos dos números.
 */

function sumar(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return 'Alguno de los datos ingresados no es valido!!!';
    }
    return num1 + num2;
}

console.log(sumar(345, 89));