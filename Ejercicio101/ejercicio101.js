/*101. Crea una función llamada `calcularAreaRectangulo` que tome un objeto con 
propiedades `ancho` y `alto` y devuelva el área del rectángulo.
 */
const objeto = {
    ancho: 20,
    alto: 25
}
//console.log(objeto.alto);
//console.log(objeto['alto']);

function calcularAreaRectangulo(objeto) {
    let area;
    //comprobar que los atributos del objeto sean enteros positivos 
    if (typeof objeto.alto !== 'number' || typeof objeto.ancho !== 'number' || objeto.alto <= 0 || objeto.ancho <= 0) {
        return 'Alguno de los datos ingresados no es valido, debe ingresar un entero positivo!'
    }
    area = objeto.ancho * objeto.alto;
    return area;
}

console.log(calcularAreaRectangulo(objeto));