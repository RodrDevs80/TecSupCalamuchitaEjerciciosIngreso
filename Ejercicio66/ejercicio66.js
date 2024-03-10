/*66- Crea una función llamada sumaDigitos que tome un número entero como argumento y 
retorne la suma de sus dígitos. Por ejemplo, si el número es 123, la función debe retornar 
6 (1 + 2 + 3).
 */

function sumaDigitos(num) {
    //comprobamos si es un entero
    if (typeof num !== 'number') {
        return "El tipo de dato ingresado no es correcto,ingrese un numero entero!!!"
    }
    //variables
    let suma = 0;
    const numerosInteger = [];
    //pasamos el entero a string para poder dividirlo
    const numero = num.toString();
    const numerosString = numero.split('');
    //hacemos un parseInt
    numerosString.forEach(element => {
        numerosInteger.push(parseInt(element));
    });
    //sumamos
    numerosInteger.forEach(element => {
        suma += element;
    })
    return suma;
}


console.log(sumaDigitos(78934561));