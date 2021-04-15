import React from 'react';
import {
    Link
} from "react-router-dom";
import BusLogo from '../../../images/bus1.jpg';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="container navbar-container mb-5">
            <nav className="navbar navbar-expand-lg navbar-light">
                <img className="img-fluid busLogo" src={BusLogo} alt="/"></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-3" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3" to="/about"> About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3 " to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3 " to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3 " to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </section>
    );
};

export default Navbar;