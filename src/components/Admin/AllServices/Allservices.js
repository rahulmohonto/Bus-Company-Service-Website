import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './AllServices.css'

const AllServices = () => {
    const [deleteService, setDeleteService] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get('https://rocky-ocean-05457.herokuapp.com/services')
                .then(res => setDeleteService(res.data));
        }
        fetchData()
    }, [deleteService])


    const deleteData = id => {
        // console.log(event.target)
        fetch(`https://rocky-ocean-05457.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('deleted successfully')
                }
                console.log('Service deleted', result)
            })
        console.log('button clicked', id)
    }

    const LoadService = () => {
        // const container = document.getElementById('productHolder');

        return deleteService.map(serviceItem =>
        (
            <div className="container service-container">
                <div className="service-div">
                    <Table className="table table-bordered" striped bordered hover size="lg">
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

                                <td> <strong>{serviceItem.name}</strong></td>
                                <td> <span >{serviceItem.company}</span></td>
                                <td><span>{serviceItem.description}</span></td>

                                <td><button className="service-delete-button" onClick={() => deleteData(serviceItem._id)}>Delete Service</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
        )

    }





    return (
        <body>

            <div id="productHolder">
                <h3 className="text-center text-secondary">Total Services : {deleteService.length}</h3>
                <div className="container">
                    <table className="table table-bordered" size="lg">
                        <thead>
                            <tr>
                                <th >Service Name</th>
                                <th >Comapny Performing Service</th>
                                <th >Description</th>
                                <th >Delete Button</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <LoadService />

            </div>
        </body>
    );
};

export default AllServices;