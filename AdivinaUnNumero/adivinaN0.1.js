/*Adivina un numero entre 1 y 100;
 */
/**
 * Pasos:
Inicio: genero un numero aleatorio
Pregunta: numero elegido es igual al numero secreto
Respuesta: se le da pistas al usuario, si no acierta ->mayor o menor 
Ajustar: el usuario ingresa otros números || 10 oportunidades
Repetir: repite los pasos 2 a 4 hasta adivinar el número secreto.
 */

//genero un numero aleatorio
const numeroSecreto = Number((Math.random() * 100).toFixed());
console.log(numeroSecreto);

//contador
let contador = 0;
//cantidad de intentos para acertar!
let intentos = 10;
while (contador < intentos) {
    //ingreso del numero del usuario
    let numeroElegido = Number(prompt('Ingrese un numero entre 1 y 100: '));
    console.log(typeof numeroElegido);
    console.log(typeof numeroSecreto);
    if (numeroElegido !== numeroSecreto) {
        if (numeroElegido < numeroSecreto) {
            alert('El numero elegido es MENOR que el numero secreto');
        } else {
            alert('El numero elegido es MAYOR que el numero secreto');
        }
    } else {
        alert('Felicidades Acertaste el numero secreto:' + numeroSecreto);
        break;
    }
    contador++;
}
if (contador === 10) {
    alert(`PERDISTE: no pudiste acertar el numero secreto en ${intentos} intentos`);
    alert(`EL NUMERO SECRETO ERA: ${numeroSecreto}`);
}









