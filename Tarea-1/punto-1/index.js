///*/*/Punto 1: Acceso y Modificación Básica de Datos: Dado el siguiente array de libros

let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

let segundoLibro = libros[1];

// Imprime el título y el autor del segundo libro
console.log(`Título: ${segundoLibro.titulo}`);
console.log(`Autor: ${segundoLibro.autor}`);


*/*/*/*/////////////////////////////////////

*/*/*/*/*/*Actualiza el número de páginas del primer libro a 350.

Actualiza el número de páginas del primer libro
libros[0].paginas = 350;



*/*//*//*/*
imprime en la consola la información completa del primer libro después de la actualización.
console.log(libros[0]);

**///*//*
// Usa map para crear un nuevo array con solo las propiedades titulo y autor
let librosSimplificados = libros.map(libro => {
    return {
        titulo: libro.titulo,
        autor: libro.autor
    };
});

// Imprime el nuevo array
console.log(librosSimplificados);

[
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien' },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling' }
];


