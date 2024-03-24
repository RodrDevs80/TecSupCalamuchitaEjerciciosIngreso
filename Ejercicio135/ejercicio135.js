/** 
 * 135. Crea un objeto JSON que represente información de productos, incluyendo 
`nombre`, `precio`, y `stock`. Calcula el valor total de los productos en stock
 */
//JSON

//Json 
const productos = `
[
   {
    "nombre":"Jabón en polvo Ariel",
    "precio":"6000",
    "stock":"250"
   },
   {
    "nombre":"Fideos Marolio",
    "precio":"1000",
    "stock":"300"
   },
   {
    "nombre":"Pasta de dientes Colgate",
    "precio":"1240",
    "stock":"1400"
   },
   {
    "nombre":"Jabón Tocador Rexona",
    "precio":"650",
    "stock":"1000"
   }
]
`
const productos2 = `{
    "Productos1": {
        "nombre": "Jabón en polvo Ariel",
        "precio": "6000",
        "stock": "250"
    },
    "Productos2": {
        "nombre": "Fideos Marolio",
        "precio": "1000",
        "stock": "300"
    },
    "Productos3": {
        "nombre": "Pasta de dientes Colgate",
        "precio": "1240",
        "stock": "1400"
    },
    "Productos4": {
        "nombre": "Jabón Tocador Rexona",
        "precio": "650",
        "stock": "1000"
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
const objetoProductos = convertirAObjeto(productos);
const objetoProductos2 = convertirAObjeto(productos2);
for (let i = 0; i < objetoProductos.length; i++) {
    console.log(objetoProductos[i].nombre);
    console.log(objetoProductos[i].precio);
    console.log(objetoProductos[i].stock);
}
console.log('***********************************');
let totalDeStock = 0;
for (const producto in objetoProductos2) {
    console.log(producto, objetoProductos2[producto].precio * objetoProductos2[producto].stock);
    totalDeStock += objetoProductos2[producto].precio * objetoProductos2[producto].stock;
}

console.log(totalDeStock);





