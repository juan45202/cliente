import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener el state de tareas 
    const tareasContext = useContext(tareaContext);
    const { tareaSeleccionada, errorTarea, agregarTarea, 
            validarTarea, obtenerTareas, actualizarTarea, limpiarrTarea
          } = tareasContext;

    //Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (tareaSeleccionada !== null) {
            guardarTarea(tareaSeleccionada);
        } else {
            guardarTarea({nombre: ''})
        }

    }, [tareaSeleccionada]);

    //State del formulario
    const [ tarea, guardarTarea] = useState({
        nombre: ''
    });

    //Extraer el nombre del proyecto
    const { nombre } = tarea;

    //Si no hay proyecto seleccionado 
    if(!proyecto) return null;

    //Array destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    //Leer los valores del fomulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //Validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }
        //Revisar si es edicion o nueva tarea
        if (tareaSeleccionada === null) {
            //agregar la nueva tarea al state
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else{
            //Actualizar la tarea existente
            actualizarTarea(tarea);
            limpiarrTarea();
        }

        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual._id);

        //Reiniciar el form
        guardarTarea({nombre: ''});
        
    }

    return (  
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className='contenedor-input'>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea..'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input 
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errorTarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}
 
export default FormTarea;