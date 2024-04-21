import React, { useState, useEffect } from 'react';
import './FormTarea.css';
import { useParams } from "react-router-dom";
import * as formTareaFunctions from './FormTareaFunctions.js';

function FormTarea() {
    const { parametro } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        formTareaFunctions.fetchData(parametro, setName, setStatus, setDueDate, setDescription);
    }, []);

    const handleSubmit = async (e) => {
        formTareaFunctions.enviar(e, parametro, name, description, status, dueDate);
    };

    return (
        <div className='estilo-box form-container'>
            <form onSubmit={handleSubmit} className=''>
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
                    <button type="submit" className="btn btn-light">Guardar</button>
                    <button type="button" className="btn btn-light" onClick={formTareaFunctions.cancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default FormTarea;
