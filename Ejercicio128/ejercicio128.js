/**
 * 128. Crea una matriz de calificaciones de estudiantes. Utiliza un bucle anidado para calcular el promedio de calificaciones de cada estudiante y muestra los promedios en la consola
 */
//matriz de promedios 
const matrizCalificacionesEstudiantes = [
    [8, 7, 8, 6, 5, 6],
    [7, 8, 9, 10, 9, 2],
    [10, 9, 8, 10, 10, 8],
    [7, 8, 9, 10, 9, 7]
];
const promedios = [];

//proceso
for (let i = 0; i < matrizCalificacionesEstudiantes.length; i++) {
    let suma = 0;
    for (let j = 0; j < matrizCalificacionesEstudiantes[i].length; j++) {
        suma += matrizCalificacionesEstudiantes[i][j];
    }
    const promedio = (suma / matrizCalificacionesEstudiantes[i].length).toFixed(2);
    promedios.push(promedio);
}
//salida
let alumno = 1;
promedios.forEach((promedio) => {
    console.log(`El promedio del alumno ${alumno++} es de ${promedio}`);
})




