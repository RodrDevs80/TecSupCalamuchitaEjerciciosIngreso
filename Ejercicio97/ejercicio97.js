/*97. Crea una lista de elementos `<li>` y utiliza JavaScript para resaltar un elemento 
cuando se haga clic en él, cambiando su color de fondo
 */

const items = document.getElementsByTagName('li');
items[0].style.cursor = 'pointer';
items[1].style.cursor = 'pointer';
items[2].style.cursor = 'pointer';

function resaltar(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].addEventListener('click', (e) => {
            arreglo[i].style.background = 'rgb(255, 0, 0)';
        })

    }
}
resaltar(items);

