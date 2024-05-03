import React from "react";
import './Profile.css';
import imagen from '../../Images/perfil.png';

function Profile() {
    const nombre = 'Kevin Antonio Magaña Monroy';
    const cargo = 'Developer';
    const telefono = '+503 7944-0351';
    const email = 'kammonroy@gmail.com';
    const direccion = 'www.kevinamm.com';

    return (
        <div className="profile d-flex row">
            <img src={imagen} alt="Imagen del usuario" />
            <div className="d-flex justify-content-center">
                <div className="contenido-profile">
                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>Cargo:</strong> {cargo}</p>
                    <p><strong>Telefono:</strong> {telefono}</p>
                    <p><strong>Correo:</strong> {email}</p>
                    <p><strong>Sitio Web:</strong> <a href="https://www.kevinamm.com/" target="_blank">{direccion}</a></p>
                </div>
            </div>
        </div>
    );
}
export default Profile;