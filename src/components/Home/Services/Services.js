import React, { useState, useEffect } from 'react';
import ShowServices from '../ShowServices/ShowServices';
import './Service.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('https://rocky-ocean-05457.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        // setServices(fakeData)
        // console.log(services);
    })
    return (
        <section className="container services mt-5">
            <div className="container text-light mt-5">
                <h3 className="text-center">Our Provided Services</h3>
                <div className="row main">
                    {
                        services.map(service => <ShowServices key={service.id} service={service}></ShowServices>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;