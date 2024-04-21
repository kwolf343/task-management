import React from 'react';
import './Sidebar.css';
function Sidebar(){
    const home = () =>{
        window.location.href = "/";
    }
    const tasks = () =>{
        window.location.href = "/tasks";
    }
    const profile = () =>{
        window.location.href = "/Profile";
    }
    return(
        <div className="sidebar">
            <ul>
                <li onClick={home} className="menu"><i className="bi bi-house"></i><p>Home</p></li>
                <li onClick={tasks}><i className="bi bi-card-checklist"></i><p>Tasks</p></li>
                <li onClick={profile}><i className="bi bi-person-fill"></i><p>Profile</p></li>
            </ul>
        </div>
    );
}
export default Sidebar;