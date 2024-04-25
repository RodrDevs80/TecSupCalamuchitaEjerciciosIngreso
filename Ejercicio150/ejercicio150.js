/*150-crea el juego del ahorcado
 */
const arregloAhorcado = ['./img/ahorcadoParte2.jpg', './img/ahorcadoParte3.jpg', './img/ahorcadoParte4.jpg', './img/ahorcadoParte5.jpg', './img/ahorcadoParte6.jpg', './img/ahorcadoParte7.jpg'];
const guionesPalabra = document.getElementById('guiones-palabra');
const ingresoLetras = document.getElementById('ingreso-letras');
const resultado = document.getElementById('resultado');
const ahorcado = document.getElementById('ahorcado');
const reiniciarJuego = document.getElementById('reinicio');
let guion = null;
let letraMayuscula = '';
let contadorDeErrores = 0;
let contadorDeAsiertos = 0;
let bandera = true;
const selectRamdomPalabra = () => {
    //selecciona palabra
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    //divide la palabra en sus letras
    const selectedWord = word.split('');
    return selectedWord;
};

function crearGuiones(palabra, guionesPalabra) {
    for (let i = 0; i < palabra.length; i++) {
        guion = document.createElement('div');
        guion.classList.add('guion');
        guion.textContent = '_';
        guionesPalabra.appendChild(guion);
    }

}
function modificarLengthPalabra(palabra) {
    return (palabra.filter((letra, indice, palabra) => { return palabra.indexOf(letra) === indice; }));
}
let palabra = selectRamdomPalabra();

const palabraSinRepetidos = modificarLengthPalabra(palabra);
console.log('Elementos Únicos de la Palabra:', palabraSinRepetidos);
console.log(palabra);
crearGuiones(palabra, guionesPalabra);

ingresoLetras.addEventListener('change', (e) => {
    letraMayuscula = (ingresoLetras.value).toUpperCase();
    console.log(letraMayuscula);
    if (contadorDeErrores <= 5) {

        for (let i = 0; i < palabra.length; i++) {
            if (letraMayuscula == palabra[i]) {
                guionesPalabra.children.item(i).textContent = `${letraMayuscula}`;
                bandera = false;
            }
        }
        if (bandera) {
            console.log('Errores ❌:', contadorDeErrores);
            ahorcado.setAttribute('src', arregloAhorcado[contadorDeErrores]);
            if (contadorDeErrores == 5) {
                ingresoLetras.disabled = true;
                resultado.textContent = 'PERDISTE';
            }
            console.log(contadorDeErrores);
            contadorDeErrores++;
        } else {
            contadorDeAsiertos++;
            console.log('Asiertos: ✔:', contadorDeAsiertos);
            if (contadorDeAsiertos == palabraSinRepetidos.length) {
                ingresoLetras.disabled = true;
                resultado.textContent = 'GANASTE';
            }
            bandera = true;
        }
    }

})

reiniciarJuego.addEventListener('click', (e) => {
    setTimeout(() => { location.reload(); }, 500);
})

