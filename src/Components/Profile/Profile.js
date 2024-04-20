import React from "react";
import './Profile.css';
import imagen from '../../Images/user.png';

function Profile() {
    const nombre = 'Juan perez';
    const usuario = 'JuanP3';
    const telefono = '7777-7777';
    const email = 'Juan_perez@gmail.com';
    const direccion = 'San salvador Avenida Colón';

    return (
        <div className="profile d-flex">
            <div className="profile-container col-md-9 col-sm-12">
                <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                    <img src={imagen} alt="Imagen del usuario" />
                </div>
                <div className="col-md-9 col-sm-12 info">
                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>Usuario:</strong> {usuario}</p>
                    <p><strong>Telefono:</strong> {telefono}</p>
                    <p><strong>Correo:</strong> {email}</p>
                    <p><strong>Direccion:</strong> {direccion}</p>
                </div>
            </div>
        </div>
    );
}
export default Profile;