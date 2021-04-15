import React from 'react';
import fakeData from '../../../components/FakeData/FakeData.json'
import ShowServices from '../ShowServices/ShowServices';
import './Service.css'

const Services = () => {
    return (
        <section className="container services mt-5">
            <div className="container text-light mt-5">
                <h3 className="text-center">Our Provided Services</h3>
                <div className="row main">
                    {
                        fakeData.map(service => <ShowServices key={service.id} service={service}></ShowServices>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;