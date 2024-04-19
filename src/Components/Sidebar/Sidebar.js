import React from "react";
import './Sidebar.css';
function Sidebar(){
    const tasks = () =>{
        window.location.href = "/tasks";
    }
    const profile = () =>{
        window.location.href = "/";
    }
    return(
        <div className="sidebar">
            <ul>
                <li><p className="menu">MENU</p></li>
                <li onClick={tasks} className="opc"><i className="bi bi-card-checklist "></i><p className="items">Tasks</p></li>
                <li onClick={profile} className="opc"><i className="bi bi-house"></i><p className="items">Profile</p></li>
            </ul>
        </div>
    );
}
export default Sidebar;