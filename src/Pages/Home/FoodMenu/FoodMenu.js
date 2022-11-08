import React from 'react';
import FoodCard from './FoodCard/FoodCard';

const FoodMenu = ({ foods }) => {

    return (
        <div className='mx-auto mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodMenu;