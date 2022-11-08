import React from 'react';
import './Carousel.css'
import img1 from '../../../Assets/Carousel/e988093865a29fbf6ed8c4f0beb8e302.jpg'
import img2 from '../../../Assets/Carousel/ezgif.com-gif-maker.jpg'
import img3 from '../../../Assets/Carousel/buffet-indian-food-spices.jpg'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full carousel-custom">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt="" className="w-full h-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;