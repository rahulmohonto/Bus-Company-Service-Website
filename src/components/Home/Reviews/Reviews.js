import React, { useState, useEffect } from 'react';
import './Reviews.css';
import ShowReviews from '../ShowReviews/ShowReviews';



const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5700/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

        // setReviews(reviewData)
        // console.log(reviews)
    }, [reviews])

    return (
        <section className="container reviews mt-5">
            <div className="container text-secondary mt-5 mb-5">
                <h3 className="text-center mt-5 mb-5">Some FeedBacks Of Our Customers</h3>
                <div className="row">

                    {
                        reviews.map(review => <ShowReviews key={review.id} review={review}></ShowReviews>)
                    }
                </div>
            </div>

        </section >
    );
};

export default Reviews;