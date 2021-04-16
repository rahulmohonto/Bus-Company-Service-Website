import React from 'react';
import AddServices from '../AddServices/AddServices';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AllServices from '../AllServices/Allservices';
import OrderedServices from '../OrderedServices/OrderedServices';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../../Home/Home/Home';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';



const Admin = () => {
    return (
        <Router>
            <AdminNavbar></AdminNavbar>
            <Switch>

                {/* <Route path="/home">
                    <Home /></Route> */}
                <PrivateRoute path="/orderedServices">
                    <OrderedServices></OrderedServices>
                </PrivateRoute>
                <PrivateRoute path="/allServices">
                    <AllServices></AllServices>
                </PrivateRoute>
                <PrivateRoute path="/addServices">
                    <AddServices></AddServices>
                </PrivateRoute>
            </Switch>
        </Router>


    );
};

export default Admin;