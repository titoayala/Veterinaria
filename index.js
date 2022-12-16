const operaciones = require('./operaciones');
const rutaArchivo = 'citas.js';
const fs = require('fs');
let citas;

fs.readFile(rutaArchivo, 'utf8', (err, data) => {  // Lee el contenido del archivo citas.json
    if (err) throw err;
    citas = JSON.parse(data);
});

const operacion = process.argv[2]; // Lee los argumentos de la línea de comandos

// Se ejecuta la operación seleccionada, si no es reconocida indica el error!
if (operacion === 'registrar') {
    const nombre = process.argv[3];
    const edad = process.argv[4];
    const tipo = process.argv[5];
    const color = process.argv[6];
    const enfermedad = process.argv[7];
    operaciones.registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
    operaciones.leer();
} else {
    console.log('Operación no válida!'); // Se muestra solo si no se reconoce la operación!
}
