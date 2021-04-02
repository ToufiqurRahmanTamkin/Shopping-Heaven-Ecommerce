import React, { useContext } from 'react';
import {  Link} from "react-router-dom";
import './Header.css';
import {Nav, Navbar} from "react-bootstrap";
import { UserContext } from '../../App';
const Header = () => {

    const [loggedInUser] = useContext(UserContext);
    const { isSignedIn, name } = loggedInUser;
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand >Shopping Heaven</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link to="/home" className="m-2 list-item">Home</Link>
                        {
                            isSignedIn && <Link to="/order" className="m-2 list-item">Orders</Link>
                        }

                        <Link to="/admin" className="m-2 list-item">Admin</Link>

                        {
                            isSignedIn && <Link to="/login" className="m-2 list-item login-btn">{name}</Link>
                        }
                        {
                            !isSignedIn && <Link to="/login" className="m-2 list-item login-btn">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;