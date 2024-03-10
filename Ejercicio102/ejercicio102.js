/*102. Define una función llamada `calcularPromedioNotas` que acepte un objeto con una 
propiedad "Notas" (arreglo con números) , y calcule el promedio de esas notas.
 */
const objeto = {
    notas: [6, 5, 8, 4, 8, 10, 2, 9, 7]
}
//console.log(objeto.notas[1]);


const calcularPromedioNotas = (objeto) => {
    let bandera = false;
    objeto.notas.forEach((nota) => {
        if (typeof nota !== 'number' || nota <= 0) {
            bandera = true;
        }
    })
    if (bandera) {
        return 'Alguna de las notas no es valida, deben ser enteros positivos!'
    }
    const suma = objeto.notas.reduce((a, nota) => a + nota, 0);
    return (suma / objeto.notas.length).toFixed(2);


}
console.log(calcularPromedioNotas(objeto));