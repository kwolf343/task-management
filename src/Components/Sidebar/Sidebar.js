import React from 'react';
import './Sidebar.css';
import * as sidebarFunctions from './SidebarFunctions.js';

function Sidebar(){
    return(
        <div className="sidebar">
            <ul>
                <li onClick={sidebarFunctions.tasks}><i className="bi bi-card-checklist"></i><p>Tasks</p></li>
                <li onClick={sidebarFunctions.profile}><i className="bi bi-person-fill"></i><p>Profile</p></li>
            </ul>
        </div>
    );
}
export default Sidebar;