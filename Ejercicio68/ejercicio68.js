/*68- Define una función llamada esPalindromo que tome una cadena de texto como 
argumento y determine si es un palíndromo. Un palíndromo es una palabra o frase que se 
lee igual de izquierda a derecha y de derecha a izquierda, ignorando espacios y signos de 
puntuación.
 */


const esPalindromo = (cadena) => {
    if (typeof cadena !== 'string') {
        return 'El dato ingresado no es una cadena'
    }

    const nuevaCadena = cadena.replace(/\s/g, '').replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").replace(/\.|,/g, "").toLowerCase().split('').reverse().join('');

    if (cadena.replace(/\s/g, '').replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").replace(/\.|,/g, "").toLowerCase() === nuevaCadena) {
        return 'Es un palindromo'
    }
    return 'No es un palindromo'

}
//lista de palindromos
/**
Anita lava la tina
A mamá Roma le aviva el amor a papá, y a papá Roma le aviva el amor a mamá
A Mercedes, ese de crema
Allí ves a Sevilla
Amar a la dama
A mi loca Colima
Anás usó tu auto, Susana
Dábale arroz a la zorra el abad
La ruta nos aportó otro paso natural
Las Nemocón no comen sal
Le avisará Sara si va él
No deseo yo ese don
Sé verlas al revés
Se oirá la sirena
 */

const resultado = esPalindromo('A mamá Roma le aviva el amor a papá, y a papá Roma le aviva el amor a mamá');
const resultado2 = esPalindromo('Pepe se come todo lo que ve')
console.log(resultado);
console.log(resultado2);