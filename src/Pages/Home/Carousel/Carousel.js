import React from 'react';
import './Carousel.css'
import img1 from '../../../Assets/Carousel/e988093865a29fbf6ed8c4f0beb8e302.jpg'
import img2 from '../../../Assets/Carousel/ezgif.com-gif-maker.jpg'
import img3 from '../../../Assets/Carousel/buffet-indian-food-spices.jpg'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full carousel-custom mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt="" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                        <h1 className='text-4xl text-white text-left'>Dhekur is a<br />  home made food <br /> delivary service</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} alt="" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                        <h1 className='text-4xl text-white text-left'>We try to<br /> provide the best <br /> taste of bengali cuisine</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} alt="" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                        <h1 className='text-4xl text-white text-left'>Taste the best <br /> flavour of South <br /> Asian spices</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;