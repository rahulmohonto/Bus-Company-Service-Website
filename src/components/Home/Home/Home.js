import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Greetings from '../Greetings/Greetings';
import Navbar from '../../Shared/Navbar/Navbar';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import SiteInfo from '../SiteInfo/SiteInfo';

const Home = () => {
    return (
        <div className="homePage bg-info">
            <Navbar></Navbar>
            <Greetings></Greetings>
            <Services></Services>
            <Reviews></Reviews>
            <SiteInfo></SiteInfo>
            <Footer />
        </div>
    );
};

export default Home;