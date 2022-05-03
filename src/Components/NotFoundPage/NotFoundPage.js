import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../all-images/images/404-error-page-found_24908-50975.jpg'
const NotFoundPage = () => {
    return (
       <div>
            <div className='mt-10'>
                <Link className='bg-red-600 px-8 py-2 font-medium ml-3 rounded-sm text-white' to='/'>Go Home Page</Link>
            </div>
            <div className=' flex justify-center'>
            <h1 className='text-4xl font-bold text-center mt-24'>OPPS!! PAGE NOT FOUND...</h1>
            <div className='flex justify-center items-center'>
                <img src='https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12757.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580' alt="" />
            </div>
        </div>
       </div>
    );
};

export default NotFoundPage;