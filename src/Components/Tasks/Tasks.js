import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import * as tasksFunctions from './TasksFunctions.js';
import TasksServices from '../../Services/TasksServices';
import './Tasks.css';
import Card from './Card/Card';

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [tasksDone, setTasksDone] = useState([]);
    const [tasksDoing, setTasksDoing] = useState([]);
    const [tasksVisual, setTasksVisual] = useState([]);
    const [loading, setLoading] = useState(true);
    const [carga, setCarga] = useState('Cargando');
    const [status, setStatus] = useState('doing');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await TasksServices.getAllTasks();
                const misTasks = Object.values(response);
                if (misTasks.length > 0) {
                    setTasks(misTasks);
                    tasksFunctions.actualizarLista(misTasks, status, setTasksDone, setTasksDoing, setTasksVisual);
                    setLoading(false);
                } else {
                    setCarga('No se encontraron tareas');
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error al obtener las tareas:', error);
                setTasks([]);
                setLoading(false);
            }
        };
        fetchData();
    }, [status]);

    return (
        <div>
            <div>
                <h1 className='titulo'>Mis tareas</h1>
                <div className="task-container-superior">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {status}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={() => tasksFunctions.cambiarStatus('done', tasksDone, tasksDoing, setStatus, setTasksVisual)}>done</a></li>
                            <li><a className="dropdown-item" onClick={() => tasksFunctions.cambiarStatus('doing', tasksDone, tasksDoing, setStatus, setTasksVisual)}>doing</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-light" onClick={tasksFunctions.nuevaTarea}>Nueva tarea</button>
                </div>
                <div className='estilo-box cards'>
                    {loading ? (
                        <div className='carga'>
                            <span className="loader"></span>
                            <p>{carga}</p>
                        </div>
                    ) : (
                        <ul>
                            {tasksVisual.map((task, index) => (
                                <li key={index}>
                                    <Card
                                        id={task.id}
                                        name={task.name}
                                        dueDate={task.dueDate}
                                        status={task.status}
                                        editarTarea={() => tasksFunctions.editarTarea(task.id)}
                                        eliminarTarea={() => tasksFunctions.eliminarTarea(task.id, tasks, setTasks, (lista) => tasksFunctions.actualizarLista(lista, status, setTasksDone, setTasksDoing, setTasksVisual))}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
