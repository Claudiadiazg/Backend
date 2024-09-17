const esperarSegundos = () => {
    // Incluye la logica de la función acá
}

// Define la función asíncrona esperarSegundos
async function esperarSegundos(segundos) {
    // Espera la cantidad de segundos especificada usando una promesa
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(); // Resuelve la promesa después de esperar
      }, segundos * 1000); // Convertir segundos a milisegundos
    });
  
    // Mostrar un mensaje de éxito después de esperar
    console.log(`¡Han pasado ${segundos} segundos!`);
  }
  
  // Ejemplo de uso
  async function practica() {
    console.log('Inicio de la espera...');
    await esperarSegundos(3); // Espera 3 segundos
    console.log('Fin de la espera.');
  }
  
  practica();
  export default esperarSegundos;
  