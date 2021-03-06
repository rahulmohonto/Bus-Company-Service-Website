import React from 'react';
import {
    Link
} from "react-router-dom";

const AdminNavbar = () => {
    return (
        <section className="container navbar-container mb-5">
            <div className="d-flex flex-column sidebar" >
                <nav className="navbar navbar-expand-lg navbar-light">
                    {/* <img className="img-fluid busLogo" src={BusLogo} alt="/"></img> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="list-unstyled">
                            <li className="nav-item active">
                                <Link className="nav-link mr-3" to="/home"><span>Home</span> <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-3" to="/allServices">All Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-3" to="/orderedServices"> Ordered Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-3 " to="/addServices">Add Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-3 " to="/showAdmins">Admins</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
};
export default AdminNavbar;