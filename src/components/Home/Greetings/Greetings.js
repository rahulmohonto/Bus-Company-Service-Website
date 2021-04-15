import React from 'react';
import greetingImage from '../../../images/welcome.jpg'
import './Greetings.css';
import busRentIcon from '../../../images/bus-rent-icon.png';
import busRepairIcon from '../../../images/bus repair-icon.jpg';

const Greetings = () => {
    return (
        <section className="container greetings-section mb-3">

            <div className="d-flex align-items-center ">
                <div className="greeting-text mr-5 mt-5">
                    <h3 className="text-center text">WelCome To <br /> BUS-R-R-WORKSHOP Company </h3>
                    <div className="repair-icons d-flex align-items-center">
                        <div className="icon-holder mr-5 pt-4"><img className="img-fluid bus-rent-icon" src={busRentIcon} alt="/" ></img>
                            <h5>BUS RENT</h5>
                        </div>

                        <div className="icon-holder mr-5 pt-4"><img className="img-fluid bus-rent-icon" src={busRepairIcon} alt="/" ></img>
                            <h5>BUS REPAIR</h5>

                        </div>
                    </div>

                </div>
                <div className="greeting-image ml-auto mt-5">
                    <img className="img-fluid" src={greetingImage} alt="/"></img>
                </div>

            </div>
            <h2 className="text-center text-brand">We Provide The Best Fecility & Experience To Our Customer</h2>
        </section>
    );
};

export default Greetings;