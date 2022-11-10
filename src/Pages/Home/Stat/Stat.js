import React from 'react';

const Stat = () => {
    return (
        <div className='bg-white rounded-lg p-4 mt-12'>
            <h1 className='text-3xl text-semibold text-orange-500'>DHEKUR PROVIDING THE BEST</h1>
            <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
                <div className="bg-slate-200 p-8 rounded-md mb-4">
                    <h1 className='text-2xl font-semibold'>
                        Bangladeshi <br /> Cuisine
                    </h1>
                </div>
                <div className="bg-slate-200 p-8 rounded-md mb-4">
                    <h1 className='text-2xl font-semibold'>
                        Indian <br /> Cuisine
                    </h1>
                </div>
                <div className="bg-slate-200 p-8 rounded-md mb-4">
                    <h1 className='text-2xl font-semibold'>
                        Chinese <br /> Cuisine
                    </h1>
                </div>
                <div className="bg-slate-200 p-8 rounded-md mb-4">
                    <h1 className='text-2xl font-semibold'>
                        Italian <br /> Cuisine
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Stat;