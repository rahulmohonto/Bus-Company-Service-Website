import React from 'react';
import './Footer.css';
import FooterColumn from '../FooterColumn/FooterColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const ourAddress = [
        { name: "California - 101010 Harrison-street", link: "//google.com/map" },
        { name: "East Bound Ford", link: "//google.com/map" },

    ]

    const services = [
        { name: "Emergency Repair Service", link: "/emergency" },
        { name: "Engine Check-Up", link: "/check-up" },
        { name: "Full Body & Chase Building", link: "/body-building" },
        { name: "Bus Cleaning", link: "/cleaning" },

    ]
    return (
        <footer className="footer-area">
            <div className="container pt-5">
                <div className="row py-5">

                    <FooterColumn key={2} menuTitle="Services" menuItems={services} />

                    <FooterColumn key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+9894056358</button>
                        </div>
                    </FooterColumn>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;