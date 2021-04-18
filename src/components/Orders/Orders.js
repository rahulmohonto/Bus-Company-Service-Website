import React, { useState, useEffect, useContext } from 'react';
import './Orders.css'
import { UserContext } from '../../App';

const Orders = () => {
    const [orderService, setOrderService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://rocky-ocean-05457.herokuapp.com/showOrders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrderService(data))


    }, [loggedInUser.email])
    // console.log(setLoggedInUser)
    return (
        <section className="container text-center bg-success p-4 service-container ">


            <h4 className="text-center text-danger">You have ordered {orderService.length} Services</h4>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Service Name</th>
                        <th scope="col">Description </th>

                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            {
                orderService.map(order => <div className="container order-list text-center">
                    <table className="table table-bordered table-holder">
                        <thead>
                            <tr>
                                <th>{order[0].name}</th>
                                <th>{order[0].description}</th>
                                <th>{order[0].serviceStatus}</th>
                            </tr>
                        </thead>
                    </table>

                </div>)
            }

        </section>
    );
};

export default Orders;