const fs = require('fs');
const colors = require('colors');

// Tipos de REQUIRE's
// const fs = require('fs'); Para las extensiones que vienen con NODE
// const fs = require('express'); Para las extensiones que instalamos de terceros
// const fs = require('./carga'); Para extensiones creadas en nuestro proyecto

// Pudo haberse creado así:
// module.exports.crearArchivo = ...
// Pero por cuestión de orden mejor se indican los módulos 
// en la parte final del archivo
//
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El varlo [${base}], NO es un número!!!`);
            return; // Para que no continue la ejecución
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data = data + `${base} * ${i} = ${base * i}\n`;
            console.log(data);
        };

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        // fs.writeFile('tabla-2.txt', data, (err) => {
        // fs.writeFile('tabla-2.txt', 'Hola Mundo', (err) => {
        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

// Desde ES6 podemos poner un valor por defecto.
// limite = 10
//
let listarTabla = (base, limite = 10) => {
    console.log(`====================================`.green);
    console.log(`Tabla del ${base} }`.green);
    console.log(`====================================`.green);

    for (let i = 1; i <= limite; i++) {
        // data = data + `${base} * ${i} = ${base * i}\n`;
        console.log(`${base} * ${i} = ${base * i}`);
    };
}

// Antes de ES6 lo correcto debería de ser así: crearArchivo: crearArchivo
// pero puede abreviarse a solo: crearArchivo
// y la ventaja es poder colocar varios modulos que necesitamos exportar
// crearArchivo,
// modulo002,
// modulo003,
// etc,
// viendose más ordenado.
module.exports = {
    crearArchivo,
    listarTabla
}