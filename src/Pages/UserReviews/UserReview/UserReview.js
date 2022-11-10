import React from 'react';
import { FaStar, FaUserAlt, FaTrashAlt } from 'react-icons/fa'

const UserReview = ({ review, forceUpdate }) => {

    const { email, comment, image, name, ratings, _id } = review;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if(proceed){
            fetch(`http://localhost:5000/myreviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                forceUpdate();
            })
        }
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
                        <button className='btn mr-2 btn-outline'>
                            UPDATE
                        </button>
                        <button onClick={() => handleDelete(_id)} className='btn btn-circle btn-outline'>
                            <FaTrashAlt></FaTrashAlt>
                        </button>
                    </div>
                </div>
                <div>
                    <p className='text-left'>{comment}</p>
                </div>

            </div>
        </div>
    );
};

export default UserReview;