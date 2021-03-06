import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Greetings from '../Greetings/Greetings';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import SiteInfo from '../SiteInfo/SiteInfo';
import NavbarTop from '../../Shared/Navbar/Navbar';


const Home = () => {
    return (
        <div className="homePage bg-info">
            <NavbarTop></NavbarTop>
            <Greetings></Greetings>
            <Services></Services>
            <Reviews></Reviews>

            <SiteInfo></SiteInfo>
            <Footer />
        </div>
    );
};

export default Home;