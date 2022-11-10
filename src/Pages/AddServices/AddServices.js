import React from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {

    const notify = () => toast("Food Added to Foods Menu successfully");

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const img = form.img.value;
        const ratings = form.ratings.value;
        const price = form.price.value;
        const des = form.des.value;

        const food = {
            serviceName: serviceName,
            img: img,
            price: price,
            ratings: ratings,
            des: des
        }

        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Food Added');
                form.reset();
                notify();
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='w-full'>
            <div class="flex justify-center items-center">
            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-white px-16 py-8 rounded-lg shadow-lg shadow-indigo-500/40'>
                    <form onSubmit={handleAddService} className='mb-4'>
                        <h1 className='text-3xl font-semibold'>Add Food Item</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Name: </span>
                                </label>
                                <input type="text" placeholder="FOOD NAME" className="input input-bordered input-accent w-56 md:w-72" name='serviceName' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Image URL: </span>
                                </label>
                                <input type="text" placeholder="IMAGE URL" className="input input-bordered input-accent w-56 md:w-72" name='img' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Price: </span>
                                </label>
                                <input type="text" placeholder="PRICE" className="input input-bordered input-accent w-56 md:w-72" name='price' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Ratings</span>
                                </label>
                                <input type="text" placeholder="RATINGS" className="input input-bordered input-accent w-56 md:w-72" name='ratings' />
                            </div>
                        </div>
                        <div className="flex justify-start flex-col">
                            <label className="label">
                                <span className="label-text text-xl">Details:</span>
                            </label>
                            <textarea className="textarea rounded-md textarea-bordered textarea-accent  h-24 w-full" placeholder="FOOD DESCRIPTION" name='des'></textarea>
                        </div>
                        <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
                    </form>
                </div>
            </div>
            <Helmet>
                <title>DHEKUR: ADD FOODS</title>
            </Helmet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddServices;