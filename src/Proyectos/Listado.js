import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../context/proyectos/proyectoContext';
import AlertaContext from '../context/alertas/alertaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoProyectos = () => {

    //Obtener el state del formulario (extraer proyectos)
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obternerProyectos} = proyectosContext;
    
    //Obtener el state del formulario (extraer proyectos)
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //Obtener proyectos cuando carga el componente
    useEffect( () => {
        //Si hay un error
        if(mensaje) mostrarAlerta(mensaje.msg, mensaje.categoria);
        obternerProyectos();
        //eslint-disable-next-line
    }, [mensaje]);

    //Revisar si proyectos tiene contenido
    if( proyectos.length === 0 ) return <p>No hay proyectos, empieza creando uno</p>;

    return ( 
        <ul className='listado-proyectos'>
            {alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <TransitionGroup>
                {proyectos.map(proyecto =>(
                    <CSSTransition
                        key={proyecto._id}
                        timeout={200}
                        classNames="tarea"
                    >
                        <Proyecto 
                            proyecto={proyecto}
                        />
                </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;