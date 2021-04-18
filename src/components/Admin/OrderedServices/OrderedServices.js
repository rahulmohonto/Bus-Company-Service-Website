import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import ShowOrderedServices from '../ShowOrderedServices/ShowOrderedServices';

const OrderedServices = () => {

    const [ordered, setOrdered] = useState([]);
    const [orderItem, setOrderItem] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get('https://rocky-ocean-05457.herokuapp.com/allOrders')
                .then(res => setOrdered(res.data))
        } fetchData()
    }, [ordered])

    const handleSubmit = id => {
        console.log('clicked')
    }


    const updateData = id => {
        fetch(`https://rocky-ocean-05457.herokuapp.com/orderById/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrderItem(data[0])
                console.log('item clicked', orderItem._id)

                const getUpdate = document.getElementById('updateDiv');
                getUpdate.innerHTML = `
                    <h3>Data Id : ${data[0]._id}</h3>
                   Status : <input type="text" value="${data[2].serviceStatus}"/>
                    <br/>
                    <button onClick={handleSubmit(id)}>submit</button>`;
                console.log(data)
            })
        // console.log(item)
    }


    const LoadOrderedServices = id => {
        // const container = document.getElementById('productHolder');
        return ordered.map(item =>
        (
            <div className="product-container">
                <div className="product-div">
                    <Table className="table" striped bordered hover size="lg">
                        {/* <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Type</th>
                                <th>Price</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <td>{item[0].name}</td>
                                <td>{item[0].serviceType}</td>
                                <td>{item[0].description}</td>
                                <td><button className="service-update-button" onClick={() => updateData(id)}>Update Order</button></td>
                                {/* <td> id : {item._id}</td> */}
                                {/* <td>  <input type="text" company=`${item.company}`></input></td> */}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
        )

    }


    return (
        <div>
            <div>
                {/* {
                    ordered.map(order => <ShowOrderedServices key={order._id} order={order}></ShowOrderedServices>)
                } */}
                <LoadOrderedServices path="/orderById/:id" />
            </div>
            <div id="updateDiv"></div>

        </div>
    );
};

export default OrderedServices;