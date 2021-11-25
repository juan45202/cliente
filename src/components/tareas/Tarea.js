import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    //Array destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    //Obtener el state de tareas 
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas,actualizarTarea, guardarTareActual } = tareasContext;

    //Funcion que se ejecuta cuando el ususario presiona eliminar
    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas(proyectoActual._id);
    }

    //Funcion que cambia el estado de la tarea
    const tareaEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        actualizarTarea(tarea)
    }

    const seleccionarTarea = tarea => {
        guardarTareActual(tarea);
    }

    return (  

        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className='estado'>
                {tarea.estado 
                ?
                    (
                        <button 
                            type='button'
                            className='completo'
                            onClick={() => tareaEstado(tarea)}
                        >Completo</button>
                    )      
                :
                    (
                        <button 
                            type='button'
                            className='incompleto'
                            onClick={() => tareaEstado(tarea)}
                        >Incompleto</button>
                    )
                         
                }
            </div>
            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>
                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => tareaEliminar(tarea._id)}
                >Eliminar</button>
            </div>
        </li>

    );
}
 
export default Tarea;