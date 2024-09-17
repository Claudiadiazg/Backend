*////Punto 3: Búsqueda y Filtrado de Datos: Dado el siguiente array de productos:
let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

Filtrar productos de la categoría 'Ropa'

const productosRopa = productos.filter(producto => producto.categoria === 'Ropa');

// Imprimir los productos filtrados en pantalla
console.log(productosRopa);



/*//*/   2 punto
// Filtrar productos con precio mayor a 30
const preciosMayores = productos.filter(producto => producto.precio > 30);

// Imprimir el nuevo array en pantalla
console.log(preciosMayores);



**//*/**/  RETO

const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let mejorEstudiante = estudiantes[0]; // Suponemos que el primer estudiante es el mejor inicialmente

for (let i = 1; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > mejorEstudiante.promedio) {
        mejorEstudiante = estudiantes[i];
    }
}

console.log(mejorEstudiante);


