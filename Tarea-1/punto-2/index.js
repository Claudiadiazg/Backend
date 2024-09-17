*//Punto 2: Cálculo de Estadísticas Básicas: Dado el siguiente array de estudaintes y utilizando un bucle for://
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

//**/Calcula la suma de las edades de todos los estudiantes en el array
const promedioGeneral = estudiantes.reduce((acc, estudiante) => acc + estudiante.promedio, 0) / estudiantes.length;

console.log(promedioGeneral);

//*/*/*/*/Calcula el promedio de edad de los estudiantes.
const promedioEdad = sumaEdades / estudiantes.length;

console.log(promedioEdad);

*///*/ imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

