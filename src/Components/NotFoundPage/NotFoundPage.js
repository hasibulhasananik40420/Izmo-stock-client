import React from 'react';
import image from '../../all-images/images/404-error-page-found_24908-50975.jpg'
const NotFoundPage = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-3'>OPPS!! PAGE NOT FOUND...</h1>
            <div className='flex justify-center items-center'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;