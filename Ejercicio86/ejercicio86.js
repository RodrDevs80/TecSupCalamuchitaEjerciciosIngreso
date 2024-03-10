/*86. Define una variable global llamada `contador` con un valor inicial de 0. Luego, crea una función llamada `incrementarContador` que incremente `contador` en 1 cada vez que 
se llame y muestre el valor actual en la consola.

 */

let contador = 0;

const incrementarContador = () => {
    console.log(contador++);
}

incrementarContador();
incrementarContador();
incrementarContador();
incrementarContador();