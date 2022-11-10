import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = ({ serviceId, ignored }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://dhekur-server.vercel.app/reviews?serviceId=${serviceId}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [serviceId, ignored])

    return (
        <div>
            {
                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;