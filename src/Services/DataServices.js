import axios from 'axios';
import { environment } from '../Utils/environment';

const DataServices = () => {
    const getTasks = () => {
        return axios.get(environment.urlBackend + '/items', {
            headers: {
                'x-api-key': environment.key
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error al cargar las páginas:', error);
                throw error;
            });
    }
    const setTask = (task) => {
        return axios.post(environment.urlBackend + '/items', task, {
            headers: {
                'x-api-key': environment.key
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error al crear la tarea:', error);
                throw error;
            });
    }


    return {
        getTasks,
        setTask
    };
}

export default DataServices;
