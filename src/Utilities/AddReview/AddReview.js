import React from 'react';

const AddReview = () => {

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const ratings = form.ratings.value;
        const comment = form.comment.value;
        console.log(ratings, comment);
    }

    return (
        <div className='bg-base-100 w-full p-8 rounded-md mt-16'>
            <h1 className='text-2xl font-semibold'>Your Review</h1>
            <form onSubmit={handleReview}>
                <div className="flex justify-start flex-col">
                    <label className="label">
                        <span className="label-text text-xl">Ratings</span>
                    </label>
                    <input type="text" placeholder="Your rating out of 5" className="input rounded-md input-bordered w-1/3" name='ratings'/>
                </div>
                <div className="flex justify-start flex-col">
                    <label className="label">
                        <span className="label-text text-xl">Comment</span>
                    </label>
                    <textarea className="textarea rounded-md textarea-bordered h-24 w-full" placeholder="Your Review" name='comment'></textarea>
                </div>
                <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
            </form>
        </div>
    );
};

export default AddReview;