
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async ( number = 5, listar = false, hasta = 10 ) => {

    try {      

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++) {
        // multiply i with number
        const result = i * number;
        // display the result
        salida += (`${number} x ${i} = ${result}\n`);
        consola += (`${number} ${'x'.green} ${i} ${'='.green} ${result}\n`);
        }

        if(listar){
            console.log('======================'.green);
            console.log('   Table del:'.green, colors.blue(number) );
            console.log('======================'.green);

            console.log(consola);

        } 

        fs.writeFileSync( `./salida/tabla-${ number }.txt`, salida );

        return `tabla-${ number}.txt`;
        
    } catch (err) {
        throw err;
    }   

}


module.exports = {
    crearArchivo
}