import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import './Sidebar.css'
const SideNavBar = () => {
    return (

        <div className="sidebarClass text-center">
            <Nav>
                <Link to="/admin" className="m-2 list-item">Admin</Link>
                <Link to="/manageProduct" className="m-2 list-item">Manage Product</Link>
            </Nav>
        </div>
    );
};

export default SideNavBar;