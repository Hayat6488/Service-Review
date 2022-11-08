import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Food = ({food}) => {

    const { img, _id, price, ratings, serviceName, des } = food;

    return (
        <div className="card w-96 glass">
            <figure><img className='h-64 w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p className='text-left'>{des.slice(0, 100)}...</p>
                <div className='flex justify-between text-left'>
                    <p className='text-xl'>Price: Tk. {price}</p>
                    <div className='flex items-center text-xl'>
                        <p className='mr-1'><FaStar></FaStar> </p><p>{ratings}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/foods/${_id}`}>Learn more!</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Food;