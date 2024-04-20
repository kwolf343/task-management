import React, { useState, useEffect } from 'react';
import TasksServices from '../../Services/TasksServices';
import './Tasks.css';

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await TasksServices.getTasks();
                const misTasks = Object.values(response);
                setTasks(misTasks);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener las tareas:', error);
                setTasks([]);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const verTarea = (index) => {
        window.location.href = `/myTask/${index}`;
    }

    return (
        <div className="tasks">
            <div className='tasks-container col-md-9 col-sm-12'>
                <div className="d-flex container-superior">
                    <h1>Mis tareas</h1>
                    <button className="btn btn-light btn-new">Nueva tarea</button>
                </div>
                <div className='task-box'>
                    {loading ? ( // Verificar si está cargando
                        <div className='d-flex carging'>
                            <span className="loader"></span>
                            <p>Cargando</p>
                        </div>
                    ) : (
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={index}>
                                    <div className='tareas-individuales'>
                                        {task.status === 'done' ? (
                                            <i className="bi bi-check-square"></i>
                                        ) : (
                                            <i className="bi bi-square"></i>
                                        )}
                                        <div>
                                            <p className='name'>{task.name}</p>
                                            <p className='date'>{task.creationDate}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i className="bi bi-card-text"></i>
                                        <i className="bi bi-x-lg"></i>
                                    </div>
                                    {/*
                                <button className="btn custom-btn me-2" onClick={() => verTarea(index)}>Ver</button>
                                */}

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