/*109. Crea una función llamada `encontrarMayorEdad` que tome un objeto con 
propiedades `personas` (un arreglo de objetos de personas con nombres y edades) y 
encuentre la persona de mayor edad.
 */
const objeto = {
    personas: [{
        nombre: 'Juan Carlos Perez',
        edad: 25,
    },
    {
        nombre: 'Omar Ibáñez',
        edad: 18,
    },
    {
        nombre: 'Roman Beltran',
        edad: 32,
    },
    {
        nombre: 'Carlos Rodriguez',
        edad: 43,
    },
    {
        nombre: 'Leonela Allende',
        edad: 34,
    },
    {
        nombre: 'Gonzalo Barba',
        edad: 15,
    },
    {
        nombre: 'Juan Moreno',
        edad: 55,
    }
    ]
}
const objeto2 = {}

const objeto3 = {
    personas: [{
        nombre: 'Juan Carlos Perez',
        edad: 25,
    },
    {
        nombre: 'Omar Ibáñez',
        edad: 'veinte',
    },
    {
        nombre: 'Roman Beltran',
        edad: 32,
    },
    {
        nombre: 'Carlos Rodriguez',
        edad: 43,
    }]
}


const calcularEdadPromedio = (objeto) => {
    //verificando que el objeto no este vacío
    if (Object.keys(objeto).length === 0) {
        return 'EL objeto ingresado esta vacío!!!'
    }
    //verificando que las edades sean números
    for (let i = 0; i < objeto.personas.length; i++) {
        if (typeof objeto.personas[i].edad !== 'number') {
            return `ERROR:El siguiente dato: ${objeto.personas[i].edad}, no es un numero-> ${typeof objeto.personas[i].edad} y esta en la posición: ${i}`
        }
    }
    const mayor = objeto.personas.reduce((max, persona) => Math.max(max, persona.edad), 0);
    const personaMayorEdad = objeto.personas.find((persona) => persona.edad === mayor);
    return `La persona de mayor edad es: ${personaMayorEdad.nombre},con al edad de ${personaMayorEdad.edad}`;

}
console.log(calcularEdadPromedio(objeto));
console.log('--------------------------------------');
console.log(calcularEdadPromedio(objeto2));
console.log('--------------------------------------');
console.log(calcularEdadPromedio(objeto3));