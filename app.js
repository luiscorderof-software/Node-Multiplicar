const argv = require('./Config/Yargs').argv;
// const colors = require('colors');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./Multiplicar/Multiplicar'); // Es redundante la extensión .JS

/*
// console.log(process.argv);
// let argv2 = process.argv;
// console.log(argv2);

// let parametro = argv[2];
// console.log('limite: ', argv.limite);
//console.log(argv);

let base = parametro.split('=')[1];
console.log(parametro);
console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(error => console.log(error));
*/

// Para el manejo de color sin el "/safe"
//.then(archivo => console.log('Archivo creado: ' + `${archivo}`.red))

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + colors.red(`${archivo}`)))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido.');
}