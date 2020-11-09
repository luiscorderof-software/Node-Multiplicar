// Sería lo común configurarla referencia al módulo de esta forma
// const multiplicar = require('./Multiplicar/Multiplicar'); // Es redundante la extensión .JS
//
// Pero si queremos evitar llamar al módulo asi: multiplicar.crearArchivo(base)
// para llamarlo de forma abreviada asi: crearArchivo(base)
// debemos de DESTRUCTURARLO así
const { crearArchivo } = require('./Multiplicar/Multiplicar'); // Es redundante la extensión .JS

// console.log(process); // Presenta TODOS las propiedades
// console.log(process.argv); // Presenta solo la propiedad de argv
let argv = process.argv;
let parametro = argv[2];
// let base = 'dd8'; // Forma original de indicar el valor de BASE
let base = parametro.split('=')[1];
console.log(parametro);
console.log(base);

// Para ver las propiedades de MODULE
// console.log(module);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(error => console.log(error));