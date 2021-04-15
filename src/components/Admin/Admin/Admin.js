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


const Admin = () => {
    return (
        <Router>
            <AdminNavbar></AdminNavbar>
            <Switch>

                {/* <Route path="/home">
                    <Home /></Route> */}
                <Route path="/orderedServices">
                    <OrderedServices></OrderedServices>
                </Route>
                <Route path="/allServices">
                    <AllServices></AllServices>
                </Route>
                <Route path="/addServices">
                    <AddServices></AddServices>
                </Route>
            </Switch>
        </Router>


    );
};

export default Admin;