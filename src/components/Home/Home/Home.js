import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Greetings from '../Greetings/Greetings';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className="homePage bg-info">
            <Navbar></Navbar>
            <Greetings></Greetings>
            <Services></Services>
            <Reviews></Reviews>
            <Footer />
        </div>
    );
};

export default Home;