/*121. Crea un array llamado `números` con números del 1 al 5 y muestra su contenido en 
la consola.
 */
console.log('*********Forma 1***************');
//forma 1
const numeros = [1, 2, 3, 4, 5];

let contador = 0;
const hastaAqui = 5;

while (contador < hastaAqui) {
    console.log(numeros[contador]);
    contador++;
}
console.log('*********Forma 2***************');
//forma 2
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

console.log('***********Forma 3*************');
//forma 3
numeros.forEach((numero) => { console.log(numero); });

console.log('**********Forma 4**************');
//forma 4
let contador2 = 0;

do {
    console.log(numeros[contador2]);
    contador2++;
} while (contador2 < 5);

console.log('**********Forma 5**************');
//forma 5
const numeros2 = [];
let indice = 0;
for (let i = 1; i <= hastaAqui; i++) {
    numeros2.push(i);
    console.log(numeros2[indice]);
    indice++;
}
