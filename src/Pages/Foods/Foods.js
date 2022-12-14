import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Food from './Food/Food';

const Foods = () => {

    const foods = useLoaderData();

    return (
        <div className='bg-base-100 p-4 rounded-lg'>
            <div className='mt-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                        foods.map(food => <Food key={food._id} food={food}></Food>)
                    }
                </div>
            </div>
            <Helmet>
                <title>DHEKUR: FOODS</title>
            </Helmet>
        </div>
    );
};

export default Foods;