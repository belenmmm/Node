
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


// console.log(argv);

// console.log('number: yargs', argv.number);


/* const[, , arg3 = 'number=5'] = process.argv;
const [ , number = 5 ] = arg3.split('='); */



// const number = 5;

 crearArchivo(argv.n, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err))  

