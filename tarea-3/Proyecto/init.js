import esperarSegundos from './async.js'; // Aca debes poner la ruta donde creaste el archivo async.js
// init.js

// Importa la función esperarSegundos desde el archivo async.js
import esperarSegundos from './async.js'; // Asegúrate de que la ruta sea correcta

// Llama a la función esperarSegundos con diferentes valores
async function ejecutar() {
  console.log('Inicio de la espera de 2 segundos...');
  await esperarSegundos(2); // Espera 2 segundos
  console.log('Fin de la espera de 2 segundos.');

  console.log('Inicio de la espera de 5 segundos...');
  await esperarSegundos(5); // Espera 5 segundos
  console.log('Fin de la espera de 5 segundos.');

  console.log('Inicio de la espera de 1 segundo...');
  await esperarSegundos(1); // Espera 1 segundo
  console.log('Fin de la espera de 1 segundo.');
}

// Ejecuta la función de ejemplo
ejecutar();
