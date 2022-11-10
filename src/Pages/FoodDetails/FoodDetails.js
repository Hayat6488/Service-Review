import React, { useContext, useReducer } from 'react';
import './FoodDetails.css'
import { FaStar } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Reviews from '../../Utilities/Reviews.js/Reviews';

const FoodDetails = () => {

    const food = useLoaderData();
    const { user } = useContext(AuthContext);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const { img, des, price, ratings, serviceName, _id } = food;

    // Adding Review

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const ratings = form.ratings.value;
        const comment = form.comment.value;
        const userName = user?.displayName;
        const userImg = user?.photoURL;
        const userEmail = user?.email;
        const uid = user?.uid;

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}-${month}-${year}`;
        var timestamp = new Date().getTime();

        const review = {
            serviceId: _id,
            name: userName,
            image: userImg,
            comment: comment,
            ratings: ratings,
            email: userEmail,
            uid: uid,
            date: currentDate,
            time: timestamp
        }

        // fetching api to post review

        fetch('https://dhekur-server.vercel.app/reviews', {
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
                form.reset();
                forceUpdate();
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

            {/* Add Review */}

            {
                user?.uid ?
                    <div className='bg-base-100 w-full p-8 rounded-md mt-16'>
                        <h1 className='text-2xl font-semibold'>ADD A REVIEW</h1>
                        <form onSubmit={handleReview}>
                            <div className="flex justify-start flex-col">
                                <label className="label">
                                    <span className="label-text text-xl">Ratings</span>
                                </label>
                                <input type="text" placeholder="Your rating out of 5" className="input rounded-md input-bordered w-1/3" name='ratings' />
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
                    :
                    <h1 className='text-3xl font-semibold text-error mt-12'>Please Log In To Add a Review</h1>
            }



            {/* Reviews */}
            <Reviews serviceId={_id} ignored={ignored}></Reviews>
        </div>
    );
};

export default FoodDetails;