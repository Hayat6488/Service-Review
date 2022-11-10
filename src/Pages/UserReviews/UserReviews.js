import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const UserReviews = () => {

    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${user.uid}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    console.log(reviews);

    return (
        <div>
            
        </div>
    );
};

export default UserReviews;