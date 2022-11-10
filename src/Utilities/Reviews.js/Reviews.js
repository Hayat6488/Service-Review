import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = ({ serviceId, ignored }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${serviceId}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [serviceId, ignored])

    console.log(reviews);

    return (
        <div>
            {
                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;