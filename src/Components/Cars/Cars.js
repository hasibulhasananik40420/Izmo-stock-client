import React from 'react';

const Cars = () => {
    return (
        <div className='mt-16 md:flex md:justify-evenly  md:gap-6 md:mt-32 md:mb-24 pl-14 pr-14'>
           
            
           
            <div className='mt-8'>
                <img className='w-full' src="https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/28-touring-1-167x119.jpg" alt="" />
                 <div className='text-center bg-gray-300 p-3 hover:bg-red-500 hover:text-white hover:duration-500 ease-in-out'>
                     <h1 className='font-semibold'>2022 BMW 328iq Turing Edition</h1>
                     <p className=''>No owners, Brand new </p>
                     <p className=' font-semibold'> $55,000</p>
                 </div>
            </div> 
            
            
            <div className='mt-8'>
                <img className='w-full' src="https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/27-gtr-1-167x119.jpg" alt="" />
                 <div className='text-center bg-gray-300 p-3 hover:bg-red-500 hover:text-white hover:duration-500 ease-in-out'>
                     <h1 className='font-semibold'>2016 Nisan GTW-R Nismo AWD</h1>
                     <p className=''>No owners, Brand new </p>
                     <p className=' font-semibold'> $55,900</p>
                 </div>
            </div> 

           
            <div className='mt-8'>
                <img className='w-full' src="https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/26-rlx-2-167x119.jpg" alt="" />
                 <div className='text-center bg-gray-300 p-3 hover:bg-red-500 hover:text-white hover:duration-500 ease-in-out'>
                     <h1 className='font-semibold'>2020 Acure RLX Elite Hybird RX</h1>
                     <p className=''>No owners, Brand new </p>
                     <p className=' font-semibold'> $75,000</p>
                 </div>
            </div> 
          
            
            <div className='mt-8'>
                <img className='w-full' src="https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/25-mazda6-1-167x119.jpg" alt="" />
                 <div className='text-center bg-gray-300 p-3 hover:bg-red-500 hover:text-white hover:duration-500 ease-in-out'>
                     <h1 className='font-semibold'>2022 BMW M6 Gxcr Coupe WX</h1>
                     <p className=''>No owners, Brand new </p>
                     <p className=' font-semibold'> $51,000</p>
                 </div>
            </div> 

            
            <div className='mt-8'>
                <img className='w-full' src="https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/10/23-ftype-1-167x119.jpg" alt="" />
                 <div className='text-center bg-gray-300 p-3 hover:bg-red-500 hover:text-white hover:duration-500 ease-in-out'>
                     <h1 className='font-semibold'>2020 BMW 328i Turing Edition</h1>
                     <p className=''>No owners, Brand new </p>
                     <p className=' font-semibold'> $88,000</p>
                 </div>
            </div> 
        </div>
    );
};

export default Cars;