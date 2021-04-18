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
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './ServiceCheckOut.css'




const ServiceCheckOut = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser)
    const [checkOut, setCheckOut] = useState([]);
    const { _id } = useParams();
    console.log(_id)
    useEffect(() => {
        async function fetchData() {
            await axios.get(`https://rocky-ocean-05457.herokuapp.com/services`)

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

        const userEmail = loggedInUser.email;
        const serviceStatus = "";
        const newOrder = { ...loggedInUser, ...result, serviceStatus, orderTime: new Date(), userEmail }
        fetch('https://rocky-ocean-05457.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <section className="container">
            <div className="container">
                <div className="details-section">
                    <h2>Details For Your Selected service</h2>

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
                </div>



                <PrivateRoute path="/orders">
                    <Orders />
                </PrivateRoute>
                <div>
                    <div className="payment-method mt-5 mb-5">
                        <h4>Pay Through Stripe And Book The Service</h4>
                        <ProcessPayment />
                    </div>
                    <div className="select-review-section d-flex align-items-center mt-5 mb-5">
                        <div className="col-md-6 ">
                            <Button to="/orders" onClick={handleServiceOrder} className="btn btn-info ml-5">Select Service</Button>
                        </div>
                        <div className="col-md-6">
                            <h4 className="text-center">Tell Us How Was Your Experience</h4>
                            <button className="text-center ml-5 btn-brand rounded p-1" type="btn btn-info"> <Link style={{ textDecoration: 'none' }} className="" to="/addReviews">Add Reviews</Link></button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCheckOut;