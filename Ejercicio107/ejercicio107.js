/*107. Crea una función llamada `filtrarCiudades` que tome un objeto con propiedades `ciudades` (un arreglo de objetos de ciudades con población y país) y un `pais` como 
argumento, y devuelva un nuevo arreglo con las ciudades que pertenecen al país dado.
 */
const objeto = {
    ciudades: [{
        nombre: 'Paris',
        poblacion: 2165423,
        pais: 'Francia',
    },
    {
        nombre: 'Marsella',
        poblacion: 870731,
        pais: 'Francia',
    },
    {
        nombre: 'Berlin',
        poblacion: 3433695,
        pais: 'Alemania',
    },
    {
        nombre: 'Hamburgo',
        poblacion: 1652363,
        pais: 'Alemania',
    },
    {
        nombre: 'Lyon',
        poblacion: 522969,
        pais: 'Francia',
    },
    {
        nombre: 'BuenosAires',
        poblacion: 2890151,
        pais: 'Argentina',
    },
    {
        nombre: 'Córdoba',
        poblacion: 1317298,
        pais: 'Argentina'
    },
    {
        nombre: 'Rosario',
        poblacion: 948312,
        pais: 'Argentina',
    },
    ]

}

let s = 'Hola';
s.toLowerCase();

const filtrarCiudades = (objeto, pais) => {
    try {
        pais.toLowerCase();
        let resultado = [];
        resultado = objeto.ciudades.filter((ciudad) => {
            return ciudad.pais.toLowerCase() === pais;
        })
        return resultado.length > 0 ? resultado : 'No se encontró ninguna ciudad del pais solicitado!';
    } catch (error) {
        return `Se produjo el siguiente error ${error}`
    };
}
console.log(filtrarCiudades(objeto, 'argentina'));