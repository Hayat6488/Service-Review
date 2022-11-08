import React from 'react';
import './FoodDetails.css'
import { FaStar } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {

    const food = useLoaderData();
    console.log(food);

    const { img, des, price, ratings, serviceName } = food;

    return (
        <div>
            <div className="food-custom card w-7/8 glass p-4">
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
        </div>
    );
};

export default FoodDetails;