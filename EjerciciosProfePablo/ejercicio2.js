/**
 * 2-Crea una función llamada contarCaracteres que tome una cadena de texto y un carácter como parámetros, y devuelva la cantidad de veces que el carácter aparece en la cadena. Utiliza un ciclo for para recorrer la cadena.
 */

const cadena = 'cadena de caracteres';
const caracter = 'a';
const cadena1 = 'murcielago';
const caracter2 = 1;
const numero = 123561;
const numeroString = '123561';
const caracter3 = '1';
//console.log(cadena.replace(/\s/g, ''));

const contarCaracteres = (cadena, caracter) => {
    let contador = 0;
    //validación
    if (typeof cadena === 'number' || typeof caracter === 'number') {
        return console.log(`Alguno de los datos ingresado no es valido`);
    }
    for (let i = 0; i < cadena.length; i++) {
        const cadenaSinEspacios = cadena.replace(/\s/g, '');
        if (cadenaSinEspacios[i] == caracter) {
            contador++;
        }
    }
    contador !== 0 ? console.log(`¡El carácter ingresado: ${caracter}, aparece ${contador}!`) : console.log(`¡El carácter ingresado: ${caracter}, No esta en la cadena`);

}
console.log('***test 1****');
contarCaracteres(cadena, caracter);
console.log('***test 2****');
contarCaracteres(cadena1, caracter);
console.log('***test 3****');
contarCaracteres(cadena, caracter2);
console.log('***test 4****');
contarCaracteres(numero, caracter2);
console.log('***test 5****');
contarCaracteres(numeroString, caracter2);
console.log('***test 6****');
contarCaracteres(numeroString, caracter3);