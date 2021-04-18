import React from 'react';

import AddServices from '../AddServices/AddServices';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AllServices from '../AllServices/Allservices';
import OrderedServices from '../OrderedServices/OrderedServices';
import {
    BrowserRouter as Router,
    Switch,

} from "react-router-dom";

import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import ShowAdmin from './ShowAdmin/ShowAdmin';



const Admin = () => {
    return (

        <Router>
            <AdminNavbar></AdminNavbar>
            <Switch>
                <PrivateRoute path="/orderedServices">
                    <OrderedServices></OrderedServices>
                </PrivateRoute>
                <PrivateRoute path="/allServices">
                    <AllServices></AllServices>
                </PrivateRoute>
                <PrivateRoute path="/addServices">
                    <AddServices></AddServices>
                </PrivateRoute>
                <PrivateRoute path="/showAdmins">
                    <ShowAdmin></ShowAdmin>
                </PrivateRoute>
            </Switch>
        </Router>


    );
};

export default Admin;