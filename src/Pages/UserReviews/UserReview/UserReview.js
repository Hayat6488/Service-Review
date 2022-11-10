import React from 'react';
import { FaStar, FaUserAlt, FaTrashAlt } from 'react-icons/fa'

const UserReview = ({ review, forceUpdate }) => {

    const { email, comment, image, name, ratings, _id } = review;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    forceUpdate();
                })
        }
    }

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const ratings = form.ratings.value;
        const comment = form.comment.value;

        const updateData = {
            ratings: ratings,
            comment: comment
        }

        fetch(`http://localhost:5000/myreviews/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Edit Successful');
                event.target.reset();
                forceUpdate();
            }
        })

        
    }

    return (
        <div className=''>
            <div className='bg-base-100 w-full py-1 px-4 rounded-md mt-2'>
                <div className='flex justify-between'>
                    <div className='flex gap-2 mb-2'>
                        {
                            image ?
                                <div className=''>
                                    <img className='h-12 rounded-3xl' src={image} alt="" />
                                </div>
                                :
                                <div className=''>
                                    <FaUserAlt></FaUserAlt>
                                </div>
                        }
                        <div className='flex items-start flex-col'>
                            <h1>{name}</h1>
                            {
                                email ?
                                    <h2>{email}</h2>
                                    :
                                    <h2>No Data Available</h2>
                            }
                        </div>
                    </div>
                    <div className='flex justify-start items-center'>
                        <FaStar className='mr-1'></FaStar><h2>{ratings}</h2>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="my-modal-6" className="btn  mr-2 btn-outline">Edit</label>

                        <button onClick={() => handleDelete(_id)} className='btn btn-circle btn-outline'>
                            <FaTrashAlt></FaTrashAlt>
                        </button>
                    </div>
                </div>
                <div>
                    <p className='text-left'>{comment}</p>
                </div>

            </div>

            {/* Modal Body Part */}

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleUpdate}>
                        <div className="flex justify-start flex-col">
                            <label className="label">
                                <span className="label-text text-xl">Ratings</span>
                            </label>
                            <input type="text" defaultValue={ratings} placeholder="Your rating out of 5" className="input rounded-md input-bordered w-1/3" name='ratings' required/>
                        </div>
                        <div className="flex justify-start flex-col">
                            <label className="label">
                                <span className="label-text text-xl">Comment</span>
                            </label>
                            <textarea defaultValue={comment} className="textarea rounded-md textarea-bordered h-24 w-full" placeholder="Your Review" name='comment' required></textarea>
                        </div>
                        <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-success">CLOSE</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;