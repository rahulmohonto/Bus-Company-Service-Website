import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowOrderedServices from '../ShowOrderedServices/ShowOrderedServices';

const OrderedServices = () => {

    const [ordered, setOrdered] = useState([])

    useEffect(() => {
        async function fetchData() {
            await axios.get('http://localhost:5700/allOrders')
                .then(res => setOrdered(res.data))
        } fetchData()
    }, [ordered])
    return (
        <div>
            {
                ordered.map(order => <ShowOrderedServices key={order._id} order={order}></ShowOrderedServices>)
            }
        </div>
    );
};

export default OrderedServices;