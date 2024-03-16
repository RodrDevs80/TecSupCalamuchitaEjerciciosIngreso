/*117. Agrega una lista (`<ul>`) vacía a tu página HTML. Utiliza JavaScript para permitir que 
el usuario agregue elementos de lista (`<li>`) mediante un cuadro de texto y un botón 
"Agregar". 
 */

const contenedor = document.getElementById('contenedor');
const lista = contenedor.querySelector('ul');
const valorItem = document.getElementById('valor');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    const item = document.createElement('li');
    item.style.color = '#1942be';
    item.style.textTransform = 'uppercase';
    item.style.listStyleImage = "url('./jsPeque.png')";
    item.textContent = valorItem.value;
    lista.appendChild(item);
})