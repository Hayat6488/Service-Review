import React from 'react';
import { FaStar, FaUserAlt } from 'react-icons/fa'

const ReviewCard = ({ review }) => {

    const { email, comment, image, name, ratings } = review;

    return (
        <div className='bg-base-100 w-full py-1 px-4 rounded-md mt-16'>
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
            </div>
            <div>
                <p className='text-left'>{comment}</p>
            </div>

        </div>
    );
};

export default ReviewCard;