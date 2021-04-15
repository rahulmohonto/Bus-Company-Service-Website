import React from 'react';
import Greetings from '../Greetings/Greetings';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="homePage bg-info">
            <Navbar></Navbar>
            <Greetings></Greetings>
            <Services></Services>
        </div>
    );
};

export default Home;