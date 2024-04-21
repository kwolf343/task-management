import React from "react";
import "./Card.css";

function Card({ id, name, dueDate, status, editarTarea, eliminarTarea}) {
    const fechaSinHora = dueDate.slice(0, 10);
    return (
        <div className="card-container">
            <div className='tareas-individuales'>
                {status === 'done' ? (
                    <i className="bi bi-check-lg icono-status"/>
                ) : (
                    <i className="bi bi-hourglass icono-status"/>
                )}
                <div className="card-info">
                    <p className='name'><strong>{name}</strong><i className="bi bi-pencil-fill icono-pequeno pointer" onClick={() => editarTarea(id)}/></p>
                    <p className='date'>{fechaSinHora}</p>
                </div>
            </div>
            <i className="bi bi-x-lg icono-grande" onClick={() => eliminarTarea(id)}/>
        </div>
    );
}
export default Card;