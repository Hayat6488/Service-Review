import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import FoodMenu from './FoodMenu/FoodMenu';

const Home = () => {

    const foods = useLoaderData();

    return (
        <div>
            <Carousel></Carousel>
            <FoodMenu foods={foods}></FoodMenu>
        </div>
    );
};

export default Home;