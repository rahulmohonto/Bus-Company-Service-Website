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


    const updateData = id => {
        fetch(`https://rocky-ocean-05457.herokuapp.com/orderById/${id}`)
            .then(res => res.json())
            .then(data => {
                // setItem(data[0]))
                // console.log('item clicked', _id)   

                const getUpdate = document.getElementById('updateDiv');
                getUpdate.innerHTML = `
                <h3>Data Id : ${data[0]._id}</h3>
               Status : <input type="text" value="${data[2].serviceStatus}"/>
                <br/>
                <button onClick={handleSubmit}>submit</button>`;
                console.log(data)
            })
        console.log(item)
    }

    const handleSubmit = () => {
        console.log('clicked')
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
                            {/* <td> id : {item._id}</td> */}
                            {/* <td>  <input type="text" company=`${item.company}`></input></td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="updateDiv"></div>
        </section>
    );
};

export default ShowOrderedServices;