import React from 'react';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard/FoodCard';

const FoodMenu = ({ foods }) => {

    return (
        <div className='mt-16'>
            <h1 className='text-4xl text-left ml-2'>Our Foods</h1>
            <div className='mx-auto mt-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="card-actions justify-end mr-20 mt-4">
                <button className="btn btn-primary px-8"><Link to='/foods'>See All</Link></button>
            </div>
        </div>
        </div>
    );
};

export default FoodMenu;