import React from 'react';
import NuevoProyecto from '../../Proyectos/NuevoProyecto';
import ListadoProyectos from '../../Proyectos/Listado';

const SideBar = () => {
    return (  
        <aside>
            <h1>MERN<span>Tasks</span> </h1>
            <NuevoProyecto />
            <div className='proyectos'>
                <h2>Tus proyectos</h2>
                <ListadoProyectos />                   
            </div>
        </aside>
    );
}
 
export default SideBar;