const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    //edad: 50,
    getNombre(){
        return `${ this.nombre } ${ this.apellido }`
    }
}

/* const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder; */

function imprimeHeroe( {nombre, apellido, poder, edad = 0} ){
    nombre = 'Belen';

console.log(nombre, apellido, poder, edad)

}

//imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0];

const [ , , h3 ] = heroes;

console.log( h3);


/* const {nombre, apellido, poder, edad = 0} = deadpool;

console.log(nombre, apellido, poder, edad) */

