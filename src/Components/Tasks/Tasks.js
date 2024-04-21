import React, { useState, useEffect } from 'react';
import TasksServices from '../../Services/TasksServices';
import './Tasks.css';
import Card from './Card/Card';
import Swal from 'sweetalert2';

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
                const response = await TasksServices.getTasks();
                const misTasks = Object.values(response);
                if (misTasks.length > 0) {
                    const tasksDone = misTasks.filter(task => task.status === 'done');
                    const tasksDoing = misTasks.filter(task => task.status === 'doing');
                    setTasks(misTasks);
                    setTasksDone(tasksDone);
                    setTasksDoing(tasksDoing);
                    setTasksVisual(tasksDoing);
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
    }, []);

    const cambiarStatus = (myStatus) => {
        if (myStatus === 'done') {
            setStatus(myStatus);
            setTasksVisual(tasksDone);
        }else if(myStatus === 'doing'){
            setStatus(myStatus);
            setTasksVisual(tasksDoing);
        }
    }

    const nuevaTarea = () => {
        window.location.href = '/FormTarea';
    }

    const editarTarea = (index) => {
        window.location.href = `/FormTarea/${index}`;
    }
    const eliminarTarea = (index) => {
        Swal.fire({
            title: '¿Borrar tarea?',
            text: "¡No podras revertir eso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, Borrar!',
            heightAuto: false
        }).then((result) => {
            if (result.isConfirmed) {
                try{
                    Swal.fire({
                        title: "Exito",
                        text: "Tarea Borrada exitosamente",
                        icon: "success",
                        heightAuto: false
                    });
                }catch(error){
                    Swal.fire({
                        title: "Error!",
                        text: "Ocurrió un error al intentar eliminar la tarea",
                        icon: "error",
                        heightAuto: false
                    });
                }
            }
        })
    }

    return (
        <div>
            <div>
                <h1 className='titulo'>Mis tareas</h1>
                <div className="task-container-superior">
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {status}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onClick={() => cambiarStatus('done')}>done</a></li>
                            <li><a class="dropdown-item" onClick={() => cambiarStatus('doing')}>doing</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-light" onClick={nuevaTarea}>Nueva tarea</button>
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
                                        editarTarea={editarTarea}
                                        eliminarTarea={eliminarTarea}
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