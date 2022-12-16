const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad) {
    fs.readFile('citas.js', 'utf8', (err, data) => {  // Lee el contenido del archivo citas.json
        if (err) throw err;
        const citas = JSON.parse(data); // Convierte el contenido del archivo en un objeto JavaScript

        citas.push({ nombre, edad, tipo, color, enfermedad }); // Agrega la nueva cita al final del arreglo

        fs.writeFile('citas.js', JSON.stringify(citas), (err) => {  // Escribe el arreglo actualizado de vuelta al archivo citas.json
            if (err) throw err;
            console.log('La cita fue registrada exitosamente!');
        });
    });
}

function leer() {
    fs.readFile('citas.js', 'utf8', (err, data) => {  // Lee el contenido del archivo citas.json
        if (err) throw err;
        const citas = JSON.parse(data);
        console.log(citas);
    });
}

module.exports = { registrar, leer };
