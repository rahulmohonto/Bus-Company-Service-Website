import React from 'react';
import './ShowReviews.css'

const ShowReviews = (props) => {

    console.log(props);
    const { name, image, description, satisfactionLevel } = props.review
    return (
        <section className="container col-md-3 card-div2 mt-3">

            <div className="my-3 text-center justify-content-center align-items-center">
                <div className="card card-main" style={{ width: '16rem' }}>
                    <div className="card-image-holder bg-info">
                        <img src={image} className="img-fluid card-image" alt="/" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <footer className="">Satisfaction Level : {satisfactionLevel}</footer>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ShowReviews;