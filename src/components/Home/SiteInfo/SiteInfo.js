import React from 'react';
import {
    Link
} from "react-router-dom";
import './SiteInfo.css';
import busRepairImage from '../../../images/repair.jpg';
import socialIcon from '../../../images/fb.png';
import socialIcon2 from '../../../images/youtube.jpg'
import socialIcon3 from '../../../images/whattsapp.png';



const SiteInfo = () => {
    return (
        <section id="contact" className="container contact-section">


            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div className="carousel-item contact1 active">
                        <h1>Join us on Social Media</h1>
                        <div className="row d-flex align-items-center justify-content-around">
                            {/* <div className="col-md-7">


                            </div> */}
                            <div className="col-md-3 mt-5 align-items-center facebook-icon bg-brand">
                                <Link to="https://www.facebook.com"> 
                                <img src={socialIcon} alt="/" className="img-fluid socialLogo"/>
                                 </Link>
                            </div>
                            <div className="col-md-3 mt-5 align-items-center facebook-icon bg-brand">
                                <Link to="https://www.youtube.com"> 
                                <img src={socialIcon2} alt="/" className="img-fluid socialLogo"/>
                                </Link>
                            </div>
                            <div className="col-md-3 mt-5 align-items-center facebook-icon bg-brand">
                                <Link to="https://www.whatspp.com">
                                <img src={socialIcon3} alt="/" className="img-fluid socialLogo"/>
                                    </Link>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex align-items-center justify-content-around">
                            <div className="col-md-8 mt-3">
                                <form className="sign up-form mt-5">

                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <button type="button" className="btn text-white"><Link to="/login">Sign Up</Link></button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-8">
                                <p>We Provide professional service center staffed by factory trained technicians which has an outstanding reputation with other motorcoach companies, motorhome owners, and entertainer coach operators. Elite Coach’s Service department is a full service facility serving Prevost, MCI & Temsa motorcoaches and Class A motorhomes and offers emergency roadside services. B_R_R_COMPANY also has a drive through wash bay with full service washes available.We provide roadside assistance service for private motorcoaches and charter buses accross various states.We Know how much the value of peoples lives, thats why we also provide rent,bus driving traning, servicing, repair and paintjob.We put our customers interest above everything.  </p>
                            </div>
                            <div className="col-md-4 call">
                                <img src={busRepairImage} className="d-block w-100 call-icon" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
    );
};

export default SiteInfo;