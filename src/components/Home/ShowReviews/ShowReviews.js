import React from 'react';
import './ShowReviews.css'

const ShowReviews = (props) => {

    console.log(props);
    const { name, image, description, satisfactionlevel } = props.review
    return (
        <section className="container card-div2 mt-3 bg-info">
            <div className="col-md-3 mx-5 my-3 text-center justify-content-center align-items-center">
                <div className="card card-main" style={{ width: '16rem' }}>
                    <div className="card-image-holder bg-info">
                        <img src={image} className="img-fluid card-image" alt="/" />
                    </div>
                    <div className="card-body mt-5">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <footer className="">Satisfaction Level : {satisfactionlevel}</footer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowReviews;