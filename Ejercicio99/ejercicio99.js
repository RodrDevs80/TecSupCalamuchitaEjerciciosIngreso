/*99. Crea un botón que oculte un elemento en tu página cuando sea clicado y lo muestre 
nuevamente cuando se vuelva a hacer clic
 */

const aparecerOcultar = () => {
    const btn = document.getElementById('btn');
    const vista = document.getElementById('vista');
    if (vista.style.display !== 'none') {
        vista.style.display = 'none';
        btn.textContent = 'Ver';
    } else {
        vista.style.display = 'block';
        btn.textContent = 'Ocultar';
    }
}
