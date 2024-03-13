/*El recibidor de granos de la Cooperativa La Perdedora, hará la apertura de la 
cosecha con un ingreso de Maíz de 3000 toneladas. Necesito ver si en el silo 
hay maíz en stock y que luego de descarga me informe el stock actualizado
 */
//investigar sobre el tema: ¿cual es capacidad maxima del silo? 
//Según los datos encontrados los silos de maíz tienen entre 50 y 1000 toneladas de almacenamiento.
//vamos a suponer que la empresa tiene 5 silos de 1000 toneladas.

//variables-> entradas
const silos = [{
    nombre: 'Silo1',
    cantidadDeMaiz: 0,
},
{
    nombre: 'Silo2',
    cantidadDeMaiz: 0,
},
{
    nombre: 'Silo3',
    cantidadDeMaiz: 0,
},
{
    nombre: 'Silo4',
    cantidadDeMaiz: 0,
},
{
    nombre: 'Silo5',
    cantidadDeMaiz: 1000,
}
]
let ingresoDeMaiz = 2345;
const capacidadMaxina = 5000;
let capacidadOcupada = 0;//es para acumular inicializa en 0.
//determino la capacidad ocupada del almacenamiento.
for (let i = 0; i < silos.length; i++) {
    capacidadOcupada += silos[i].cantidadDeMaiz;
}
//determino la capacidad disponible.
let capacidadDisponible = capacidadMaxina - capacidadOcupada;
//verifico que no sobrepase la capacidad maxima disponible.
if (ingresoDeMaiz > capacidadDisponible) {
    console.log(`El ingreso de Maiz ${ingresoDeMaiz}, sobrepasa la capacidad disponible,solo se almacenara ${capacidadDisponible}`);
    ingresoDeMaiz = capacidadDisponible;
}
//ingresar las 3000 toneladas en los silos
for (let i = 0; i < silos.length; i++) {
    if (silos[i].cantidadDeMaiz >= 0 && silos[i].cantidadDeMaiz < 1000) {
        if (ingresoDeMaiz >= 1000) {
            silos[i].cantidadDeMaiz += 1000;
            ingresoDeMaiz -= silos[i].cantidadDeMaiz;
        } else {
            silos[i].cantidadDeMaiz = ingresoDeMaiz;
            ingresoDeMaiz -= silos[i].cantidadDeMaiz;
        }
        if (ingresoDeMaiz === 0) {
            break;
        }
    }


}
// nuestro la actualización stock en cada silo
silos.forEach(silo => {
    console.log(`${silo.nombre} tiene en stock ${silo.cantidadDeMaiz}`);
});
//muestro el total en stock
const totalStock = silos.reduce((acumulador, silo) => acumulador + silo.cantidadDeMaiz, 0);
console.log(`El stock total de maíz es: ${totalStock} y queda espacio para ${capacidadMaxina - totalStock}`);






