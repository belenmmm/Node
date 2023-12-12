const argv  = require('yargs')
        .option('n',{
            alias: 'number',
            type: 'number',
            demandOption:true,
            describe:'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe:'Muestra la tabla en consola'
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default:10,
            describe:'Este es el número hasta donde quieres la tabla'
        })
        .check((argv, options) => {
            if(isNaN(argv.n)){
                throw 'El number tiene que ser un número'
            }
            return true;
        })
        .argv;

    module.exports = argv;