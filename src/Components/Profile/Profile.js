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
            <div className="estilo-box d-flex row">
                <div className="col-lg-4 col-11 profile">
                    <img src={imagen} alt="Imagen del usuario" />
                </div>
                <div className="col-lg-8 col-11 col-sm-11 datos-user">
                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>Usuario:</strong> {usuario}</p>
                    <p><strong>Telefono:</strong> {telefono}</p>
                    <p><strong>Correo:</strong> {email}</p>
                    <p><strong>Direccion:</strong> {direccion}</p>
                </div>
            </div>
    );
}
export default Profile;