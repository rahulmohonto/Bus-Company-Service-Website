import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ShowOrderedServices = (props) => {
    const { name, description, serviceType, _id, id } = props.order[0];
    const [item, setItem] = useState([])



    // useEffect(() => {
    //     async function fetchData() {
    //         await axios.get(`https://rocky-ocean-05457.herokuapp.com/orderById/${id}`)
    //             .then(res => {
    //                 setItem(res.data)
    //                 console.log(item)
    //             })
    //     }

    //     fetchData();

    // }, [item])


    const updateData = _id => {
        fetch(`https://rocky-ocean-05457.herokuapp.com/allOrders/${id}`)
            .then(res => res.json())
            .then(data =>
                console.log(data))
        console.log('item clicked', _id)
    }

    return (
        <section className="container">
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Service Type </th>
                            <th scope="col">Description</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{serviceType}</td>
                            <td>{description}</td>
                            <td><button className="service-update-button" onClick={() => updateData(_id)}>Update Order</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ShowOrderedServices;