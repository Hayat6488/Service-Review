import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import UserReview from './UserReview/UserReview';

const UserReviews = () => {

    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?uid=${user?.uid}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.uid])

    return (
        <div className='w-full'>
            {
                reviews.map(review => <UserReview key={review._id} review={review}></UserReview>)
            }
        </div>
    );
};

export default UserReviews;