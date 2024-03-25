/** 
139. Crea una cadena JSON que represente información de ciudades y sus poblaciones. 
Utiliza JavaScript para calcular la población total de todas las ciudades en la cadena 
JSON
 */
//JSON1
const argentina = `{
    "ciudad1": {
        "nombre": "Añatuya",
        "poblacion": "35000" 
    },
    "ciudad2": {
        "nombre": "La Plata",
        "poblacion": "768470" 
    },
    "ciudad3": {
        "nombre": "Salta",
        "poblacion": "627704" 
    },
    "ciudad4": {
        "nombre": "CABA",
        "poblacion": "3121707" 
    },
    "ciudad5": {
        "nombre": "Córdoba",
        "poblacion": "1505250" 
    },
    "ciudad6": {
        "nombre": "Rosario",
        "poblacion": "1348725" 
    }

}`
//JSON2
const argentina2 = `{
    "ciudad1": {
        "nombre": "Añatuya",
        "poblacion": 35000
    },
    "ciudad2": {
        "nombre": "La Plata",
        "poblacion": 768470
    },
    "ciudad3": {
        "nombre": "Salta",
        "poblacion": 627704
    },
    "ciudad4": {
        "nombre": "CABA",
        "poblacion": 3121707
    },
    "ciudad5": {
        "nombre": "Córdoba",
        "poblacion": 1505250
    },
    "ciudad6": {
        "nombre": "Rosario",
        "poblacion": 1348725
    }
}`

const convertirAObjeto = (cadenaJSON) => {
    //validación con try catch
    try {
        return JSON.parse(cadenaJSON);
    } catch (error) {
        return `El dato ingresado no es valido ERROR:${error.mensaje}`
    }
};

//opción 1
const objetoArgentina = convertirAObjeto(argentina);
//transformo el objeto en array
const arrayArgentina = Object.values(objetoArgentina);
//paso los valores de poblacion a float con un map
console.log(arrayArgentina);
const arrayArgentinaFloat = arrayArgentina.map((ciudad) => parseFloat(ciudad.poblacion));
console.log(arrayArgentinaFloat);
//calculo la poblacion total 
const poblacionTotal = arrayArgentinaFloat.reduce((acumulador, poblacion) => acumulador + poblacion, 0);
//muestro la poblacion total
console.log('La poblacion total es de: ' + poblacionTotal);
console.log('***************Con otro JSON con lo valores de Población Number******************');
//opción 2-con otro JSON, con los valores ya de tipo Number
const objetoArgentina2 = convertirAObjeto(argentina2);
//transformo el objeto en array
const arrayArgentina2 = Object.values(objetoArgentina);
//paso los valores de poblacion a float con un map
console.log(arrayArgentina);
//calculo la poblacion total 
const poblacionTotal2 = arrayArgentinaFloat.reduce((acumulador, ciudad) => acumulador + ciudad.poblacion, 0);
//muestro la poblacion total
console.log('La poblacion total es de: ' + poblacionTotal);
console.log('***************También se puede hacer con un for in******************');
let sumaTotalDePoblacion = 0;
const objetoArgentina3 = convertirAObjeto(argentina);
for (const ciudad in objetoArgentina) {
    //console.log(typeof objetoArgentina3[ciudad].poblacion);
    sumaTotalDePoblacion += parseFloat(objetoArgentina3[ciudad].poblacion);
}
console.log('La poblacion total es de: ' + sumaTotalDePoblacion);
console.log('***************En ambos casos JSON1-JSON2******************');
let sumaTotalDePoblacion2 = 0;
const objetoArgentina4 = convertirAObjeto(argentina2);
for (const ciudad in objetoArgentina) {
    //console.log(typeof objetoArgentina4[ciudad].poblacion);
    sumaTotalDePoblacion2 += objetoArgentina4[ciudad].poblacion;
}
console.log('La poblacion total es de: ' + sumaTotalDePoblacion2);