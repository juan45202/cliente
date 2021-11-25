import React, { useContext, useEffect } from 'react';
import SideBar from '../components/layout/SideBar';
import Barra from '../components/layout/Barra';
import FormTarea from '../components/tareas/FormTarea';
import ListadoTareas from '../components/tareas/ListadoTareas';
import AuthContext from '../context/autenticacion/authContext';

const Proyectos = () => {

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    }, []);

    return ( 
            <div className='contenedor-app'>
            <SideBar />
            <div className='seccion-principal'>
                <Barra />
                <main>
                    <FormTarea />
                    <div className='contenedor-tareas'>
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    );
}
export default Proyectos;