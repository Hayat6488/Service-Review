import React from 'react';
import { FaStar } from 'react-icons/fa'

const AddReview = () => {


    return (
        <div className='bg-base-100 w-full py-1 px-4 rounded-md mt-16'>
            <div className='flex justify-between'>
                <div className='flex gap-2 mb-2'>
                    <div className=''>
                        <img className='h-12 rounded-3xl' src={"https://lh3.googleusercontent.com/a/ALm5wu1HbbFDtkS9BukR0L8JBAgvAUx5dLPCoMbdgvyEEQ=s96-c"} alt="" />
                    </div>
                    <div className='flex items-start flex-col'>
                        <h1>Abul Hayat</h1>
                        <h2>abulhayat619@gmail.com</h2>
                    </div>
                </div>
                <div className='flex justify-start items-center'>
                    <FaStar className='mr-1'></FaStar><h2>4.6</h2>
                </div>
            </div>
            <div>
                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitia doloribus. Adipisci sapiente ex quasi blanditiis maxime cupiditate repudiandae quia molestias, ad laborum nam impedit minus. Vero soluta consequuntur atque impedit facere facilis ab aspernatur ullam amet assumenda est, tempore molestias molestiae temporibus, ratione velit? Quod repudiandae, dolorum iste doloribus repellat assumenda consequatur ipsam autem laborum excepturi ipsum neque nulla explicabo voluptatibus ipsa blanditiis obcaecati? Magnam possimus odio fugiat fuga non enim exercitationem consequuntur veritatis placeat. Tenetur illum sint ea quos cum laborum, doloremque pariatur harum! Saepe doloribus, ipsum eos dolore, perspiciatis rem nemo, enim unde fuga mollitia quibusdam eum.</p>
            </div>

        </div>
    );
};

export default AddReview;