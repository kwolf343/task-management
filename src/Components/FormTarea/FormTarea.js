import React, { useState } from 'react';
import './FormTarea.css';
import { useParams } from "react-router-dom";
import Task from '../../Models/Task';
import TasksServices from '../../Services/TasksServices';
import Swal from 'sweetalert2';

function FormTarea() {
    const { parametro } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [dueDate, setDueDate] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const task = new Task(name, description, status, dueDate);
                const response = await TasksServices.setTask(task);
                Swal.fire({
                    title: "Exito!",
                    text: "Tarea guardada exitosamente",
                    icon: "success",
                    heightAuto: false
                  }).then((result) => {
                    window.location.href = '/tasks';
                  });
            } catch (error) {
                Swal.fire({
                    title: "Ocurrió un error!",
                    text: error,
                    icon: "error",
                    heightAuto: false
                  });
            }
        };
        fetchData();
    };
    const cancelar = () =>{
        window.location.href = '/tasks';
    }

    return (
        <div className='estilo-box form-container'>
            <form onSubmit={enviar} className=''>
                {parametro ? (
                    <h1>Editar tarea</h1>
                ) : (
                    <h1>Nueva tarea</h1>
                )}
                <div className='cajas'>
                    <input
                        className='form-control'
                        type="text"
                        id="name"
                        value={name}
                        placeholder='Nombre de la tarea'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='cajas status-container'>
                    <div onClick={() => setStatus('doing')} className='status-select'>
                        {status === 'doing' ? (
                            <i className="bi bi-check-square"></i>
                        ) : (
                            <i className="bi bi-square"></i>
                        )}
                        <p>Doing</p>
                    </div>
                    <div onClick={() => setStatus('done')} className='status-select'>
                        {status === 'done' ? (
                            <i className="bi bi-check-square"></i>
                        ) : (
                            <i className="bi bi-square"></i>
                        )}
                        <p>Done</p>
                    </div>
                </div>
                <div className='cajas'>
                    <input
                        className='form-control'
                        type='date'
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className='cajas caja-grande'>
                    <textarea
                        className='form-control'
                        id="description"
                        value={description}
                        placeholder='Descripcion'
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        style={{ height: '120px', resize: 'none' }}
                    />
                </div>
                <div className='container-btn'>
                    <button type="submit" className="btn btn-light">Crear</button>
                    <button type="button" className="btn btn-light" onClick={cancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default FormTarea;
