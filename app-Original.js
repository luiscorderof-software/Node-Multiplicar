const fs = require('fs');
// Tipos de REQUIRE's
// const fs = require('fs'); Para las extensiones que vienen con NODE
// const fs = require('express'); Para las extensiones que instalamos de terceros
// const fs = require('./carga'); Para extensiones creadas en nuestro proyecto

let base = 3;
let data = '';

for (let i = 1; i <= 10; i++) {
    data = data + `${base} * ${i} = ${base * i}\n`;
    console.log(data);
};

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('tabla-2.txt', data, (err) => {
// fs.writeFile('tabla-2.txt', 'Hola Mundo', (err) => {
fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo [tabla-${base}.txt] esta creado!!!`);
});