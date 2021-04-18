import React from 'react';
import {
    Link
} from "react-router-dom";

import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'

const NavbarTop = () => {
    return (
        <section className="container navbar-container mb-5">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex align-items-center icon-header">
                    <FontAwesomeIcon className="busLogo mr-5" icon={faBus} />
                    <h3 className="text-info">BUS DEPO</h3>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navSide" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-3" to="/home"><span>Home</span> <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3" to="/orders"><span>Orders</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3" to="/about"> <span>About Us</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3 " to="/admin"><span>Admin</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3 " to="/blogs"><span>Blogs</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3 " to="/contact"><span>Contact Us</span></Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </section>
    );
};

export default NavbarTop;