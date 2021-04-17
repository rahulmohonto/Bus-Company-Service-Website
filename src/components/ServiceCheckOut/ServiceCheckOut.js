import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Orders from '../Orders/Orders';



const ServiceCheckOut = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(setLoggedInUser)
    const [checkOut, setCheckOut] = useState([]);
    const { _id } = useParams();
    console.log(_id)
    useEffect(() => {
        async function fetchData() {
            await axios.get(`http://localhost:5700/services`)

                .then(res => setCheckOut(res.data))
            // console.log(checkOut)
        }
        fetchData();
    }, [checkOut])

    const result = checkOut.filter(element =>
        (element._id === _id)

    )
    console.log(result)
    const handleServiceOrder = () => {

        const newOrder = { ...loggedInUser, ...result }
        fetch('http://localhost:5700/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div className="container">
            <h2>This is for ordering service</h2>

            <table class="table table-bordered rounded">
                <thead>
                    <tr>
                        <th scope="col">Service Name</th>
                        <th scope="col">Service Type</th>
                        <th scope="col">Details About Service</th>
                        <th scope="col">Service charge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{result[0] && result?.[0].name}</td>
                        <td>{result[0] && result?.[0].serviceType}</td>
                        <td>{result[0] && result?.[0].description}</td>
                        <td>{result[0] && result?.[0].serviceCost}</td>
                    </tr>
                </tbody>
            </table>
            <Button to="/orders" onClick={handleServiceOrder} className="btn btn-info float-right mr-2">Select Service</Button>

            <PrivateRoute path="/orders">
                <Orders />
            </PrivateRoute>
            <div>
                <h4 className="text-center">Tell Us How Was Your Experience</h4>
                <button> <Link style={{ textDecoration: 'none' }} className="" to="/addReviews">Add Reviews</Link></button>

            </div>
        </div>
    );
};

export default ServiceCheckOut;