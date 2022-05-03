import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useReview from '../../Hooks/useReview';

const SingleService = () => {
   

    const {id} = useParams()
    const [review , setReview] = useState({})
     useEffect( ()=>{
         const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setReview(data)
            console.log(data);
        })

    },[])
    console.log(review);
    return (
        <div className='text-center mt-16'>

            <div className="mx-auto  flex flex-col items-center  bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-3/4 h-3/4 rounded-t-lg md:ml-3 md:h-auto md:w-2/4 md:rounded-none md:rounded-l-lg" src={review?.img} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{review?.name}</h5>
                        <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">Description : {review?.description}</p>
                        <p className="mb-3 font-bold text-xl text-gray-700 dark:text-gray-400 ">Price : {review?.price}</p>
                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Quantity : {review?.quantity}</p>
                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Supplier : {review?.suppliername}</p>
                        <div><button className='px-8 py-2 text-white font-bold bg-red-500 rounded-sm hover:bg-orange-700 hover:ease-in-out hover:duration-500'>Delivered</button></div>
                    </div>
            </div>
           
          


            <div className='mt-8'>
                <input className='md:w-1/4 py-2 pl-4 border border-red-700' type="number" name="" id="" placeholder='Add Quantity' />
                  <div className='mt-8'>
                  <button className='bg-red-600 px-8 py-2 font-body text-white hover:bg-orange-700 hover:ease-in-out hover:duration-500'>Add Now</button>
                  </div>
            </div>

            {/* <div>
                <Link to='/manageinventory' className='bg-red-600 px-8 py-2'>Manage Inventories</Link>
            </div> */}







            {/* <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" />
                        
                            <div className="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                        
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                </div> */}


        </div>
    );
};

export default SingleService;