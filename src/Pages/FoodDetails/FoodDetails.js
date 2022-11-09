import React, { useContext } from 'react';
import './FoodDetails.css'
import { FaStar } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom';
import AddReview from '../../Utilities/AddReview/AddReview';
import { AuthContext } from '../../Context/AuthProvider';

const FoodDetails = () => {

    const food = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user.email, user.displayName, user.photoURL);

    const { img, des, price, ratings, serviceName, _id } = food;

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const ratings = form.ratings.value;
        const comment = form.comment.value;

        const review = {
            serviceId: _id,
            name: user.displayName,
            image: user.photoURL,
            comment: comment,
            ratings: ratings,
            email: user.email
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Review Added');
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="food-custom bg-base-100 card w-7/8 glass p-4">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-3xl">{serviceName}</h2>
                    <h2 className='text-2xl'>Price: Tk.{price}</h2>
                    <div className='text-2xl flex items-center'>
                        <FaStar></FaStar><h1>{ratings}</h1>
                    </div>
                    <p>{des}</p>
                </div>
            </div>
            <div className='bg-base-100 w-full p-8 rounded-md mt-16'>
            <h1 className='text-2xl font-semibold'>Your Review</h1>
            <form onSubmit={handleReview}>
                <div className="flex justify-start flex-col">
                    <label className="label">
                        <span className="label-text text-xl">Ratings</span>
                    </label>
                    <input type="text" placeholder="Your rating out of 5" className="input rounded-md input-bordered w-1/3" name='ratings'/>
                </div>
                <div className="flex justify-start flex-col">
                    <label className="label">
                        <span className="label-text text-xl">Comment</span>
                    </label>
                    <textarea className="textarea rounded-md textarea-bordered h-24 w-full" placeholder="Your Review" name='comment'></textarea>
                </div>
                <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
            </form>
        </div>
        </div>
    );
};

export default FoodDetails;