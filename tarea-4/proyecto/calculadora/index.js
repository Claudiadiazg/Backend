let numero1 = parseFloat(process.argv[2]);
let operador = process.argv[3];
let numero2 = parseFloat(process.argv[4]);

function calcular(numero1, operador, numero2) {
    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error('Argumentos 1 y 3 deben ser números.');
    }

    switch (operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 === 0) {
                throw new Error('No se puede dividir entre 0.');
            }
            return numero1 / numero2;
        default:
            throw new Error('El argumento 2 debe ser uno de los siguientes operadores: +, -, *, /');
    }
}

try {
    const resultado = calcular(numero1, operador, numero2);
    console.log(resultado);
} catch (error) {
    console.error(error.message);
}



