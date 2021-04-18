import React from 'react';
import './SiteInfo.css';
import busRepairImage from '../../../images/repair.jpg';
import socialIcon from '../../../images/facebook1.jpg';
import socialIcon2 from '../../../images/youtube.jpg'
import socialIcon3 from '../../../images/whatsapp.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook, faYoutube, faWhatsapp } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFacebook, faYoutube, faWhatsapp)
import {
    Link
} from "react-router-dom";

const SiteInfo = () => {
    return (
        <section id="contact" className="container contact-section">

            {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item contact1 active">
                        <div className="row d-flex align-items-center justify-content-around">
                            <div className="col-md-7">
                                <h1>Join us on Facebook</h1>
                                <a className="facebook-link" to="https//:www.karl_fashion.com">Visit Facebook</a>
                            </div>
                            <div className="col-md-5 mt-5 align-items-center facebook-icon">
                                <img src={socialIcon} className="d-block w-100 " alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item contact1">
                        <div className="row d-flex align-items-center justify-content-around">
                            <div className="col-md-8 mt-3">
                                <h1>Mail us about your feedback <br />& problems</h1>
                                <input type="form" className="form mt-1" value="email" />
                                <button type="button" className="btn btn-primary px-4">Send</button>
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
                                        <button type="button" className="btn text-white">Sign Up</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item contact1">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7">
                                <h1> Call us in 959714321 <br />for Any inquiery</h1>
                            </div>
                            <div className="col-md-5 call">
                                <img src={busRepairImage} className="d-block w-100 call-icon" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div> */}
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div className="carousel-item contact1 active">
                        <h1>Join us on Social Media</h1>
                        <div className="row d-flex align-items-center justify-content-around">
                            {/* <div className="col-md-7">


                            </div> */}
                            <div className="col-md-3 mt-5 align-items-center facebook-icon bg-light">
                                <FontAwesomeIcon className="busLogo mr-5" icon={faYoutube} />
                            </div>
                            <div className="col-md-3 mt-5 align-items-center facebook-icon bg-info">
                                <FontAwesomeIcon className="busLogo mr-5" icon={faFacebook} />
                            </div>
                            <div className="col-md-3 mt-5 align-items-center facebook-icon bg-primary">
                                <FontAwesomeIcon className="busLogo mr-5" icon={faWhatsapp} />
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
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate id asperiores, harum maiores possimus repudiandae corporis impedit quod ipsam expedita?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus laudantium iste mollitia! Voluptates tenetur voluptatibus facere, dolores iste accusamus asperiores esse optio itaque! Quasi repellendus dolorum nam. Asperiores, labore. Repellat porro ab exercitationem maxime rerum reprehenderit, dolore quas placeat dolorum quaerat adipisci, possimus libero molestiae cum dignissimos? Corporis, incidunt?</p>
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