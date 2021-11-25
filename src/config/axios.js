import axios from 'axios';

//Crear cliente axios
const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clienteAxios;