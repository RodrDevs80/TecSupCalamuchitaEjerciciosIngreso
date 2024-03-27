/**3-Implementa una función llamada duplicarCaracteres que tome una cadena de texto como parámetro y devuelva una nueva cadena donde cada carácter se duplique. Utiliza un ciclo for para iterar sobre la cadena original. */

const cadena = 'cadena de caracteres';
const caracter = 'a';
const cadena1 = 'murcielago';
const caracter2 = 1;
const numero = 123561;
const numeroString = '123561';
const caracter3 = '1';

function duplicarCaracteres(cadena) {
    if (typeof cadena !== 'string') {
        return console.log('El dato ingresado no es valido');
    }
    let duplicados = '';
    for (let i = 0; i < cadena.length; i++) {
        duplicados += cadena[i] += cadena[i];
    }
    return console.log(duplicados);
}

console.log('***test 1****');
duplicarCaracteres(cadena);
console.log('***test 2****');
duplicarCaracteres(cadena1);
console.log('***test 3****');
duplicarCaracteres(caracter3);
console.log('***test 4****');
duplicarCaracteres(numero);
console.log('***test 5****');
duplicarCaracteres(numeroString);
console.log('***test 6****');
duplicarCaracteres(caracter2);