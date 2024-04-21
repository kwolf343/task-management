import axios from 'axios';
import { environment } from '../Utils/environment';

const DataServices = () => {
    const getAllTasks = () => {
        return axios.get(environment.urlBackend + '/items', {
            headers: {
                'x-api-key': environment.key
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error al cargar las tareas:', error);
                throw error;
            });
    }
    const getTask = (id) => {
        return axios.get(environment.urlBackend + '/items/'+id, {
            headers: {
                'x-api-key': environment.key
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error al cargar la tarea:', error);
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
    const updateTask = (id, task) => {
        return axios.put(environment.urlBackend + '/items/' + id, task, {
            headers: {
                'x-api-key': environment.key
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error al actualizar la tarea:', error);
                throw error;
            });
    }
    const deleteTask = (id) => {
        return axios.delete(environment.urlBackend + '/items/'+id, {
            headers: {
                'x-api-key': environment.key
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('Error al eliminar las tareas:', error);
                throw error;
            });
    }


    return {
        getAllTasks,
        getTask,
        setTask,
        updateTask,
        deleteTask
    };
}

export default DataServices;
