import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import Cars from '../Cars/Cars';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import NewLook from '../NewLook/NewLook';
import Spinner from '../Spinner/Spinner';
const Home = () => {
    const navigate = useNavigate()
     
    const navigateToServiceDetail=id=>{
       navigate(`/singleservice/${id}`)
    }
    const [review ,setReview] = useReview()
    const sixCart = review.slice(0,6)
    return (
        <div>
           
             <Header></Header>
             <h1 className='text-3xl text-red-400 font-bold text-center mt-8'> Inventory</h1>
            
            {
                review? <>
                
                <div className=' md:grid md:grid-cols-3 md:gap-8 md:ml-10 '>
             
             {
                  sixCart?.map(product=> 
                   <div className="mt-8 max-w-sm bg-white rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            
                  <img className="p-8 rounded-t-lg" src={product?.img} alt="" />
             
                    <div className="px-5 pb-5">
                
                     <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product?.name}</h5>
                     <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{product?.description}</h5>
                      <p className="text-xl font-medium text-gray-900 dark:text-white">Quantity : {product?.quantity}</p>
                      <p className="text-xl font-medium text-gray-900 dark:text-white">Supplier: {product?.suppliername}</p>
                      <span className="text-xl font-semibold text-gray-900 dark:text-white">{product?.price}</span>
                
                 <div className="flex justify-between items-center">
                     <button  onClick={()=>navigateToServiceDetail(product?._id)} className="mt-2 text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Stock Update</button>
                 </div>
             </div>
         </div>)
              }
             </div>
                
                </>: <Spinner></Spinner>
            }

             <div className='text-center mt-14'>
            <Link to='/manageinventory' className='bg-red-500 px-8 py-3 font-semibold text-white rounded-sm'>Manage Inventories</Link>

            </div>
             <NewLook></NewLook>
              <Cars></Cars>
              <Contact></Contact>
        </div>
    );
};

export default Home;