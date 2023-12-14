
import colors from 'colors';
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList} from './helpers/inquirer.js';
import Tareas from './models/tareas.js';
import Tarea from './models/tarea.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';



const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){// cargar tareas
        tareas.cargarTareasFromArray( tareasDB );
    }

    do{
        //imprimir el menu
        opt = await inquirerMenu();
       switch (opt) {
        case '1':
            // crear opcion
            const desc = await leerInput('Descripción: ');
            tareas.crearTarea( desc );
        break;
        case '2':
            tareas.listadoCompleto(); 
        break;
        case '3': //listar completadas
                tareas.listarPendientesCompletadas(true); 
        break;
        case '4': //listar pendientes
                tareas.listarPendientesCompletadas(false); 
        break;
        case '5': //completado | pendiente
        const ids = await mostrarListadoCheckList( tareas.listadoArr);
        tareas.toggleCompletadas( ids );
      
        break;

        case '6': //Borrar
            const id = await listadoTareasBorrar( tareas.listadoArr);
            if ( id !== '0'){
                const ok = await confirmar('¿Está seguro?');
                if (ok) {
                tareas.borrarTarea(id);
                console.log('Tarea borrada')
                }

            }
            
        break;
       
       }
       /*  const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');

        tareas._listado[tarea.id] = tarea;
        console.log(tareas); */
        guardarDB( tareas.listadoArr );

        await pausa();      

    }while( opt !== '0' ); 
    // pausa();
}

main();