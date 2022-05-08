import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';

const Services = () => {
    const [review ,setReview] = useReview([])
    // console.log(review);
     const navigate = useNavigate()
     
     const navigateToServiceDetail=id=>{
        navigate(`/inventory/${id}`)
     }

     const handleDelete =(id)=>{
         const prceed = window.confirm('Are you sure to delete this item?')
         if(prceed){
            const url =`https://polar-castle-21999.herokuapp.com/inventory/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const remaining = review.filter(product => product._id !== id) 
                setReview(remaining)
            })

         }

     }
    return (
       <div className='md:grid md:grid-cols-3'>

       <>
       
       {
                review.map(product=> <div  key={product?._id}> 

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
               <button onClick={()=> handleDelete(product?._id)} className="mt-2 text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delate</button>
           </div>
       </div>
   </div>
                </div>
                    
                   
                    )
            }
       
       </>
 
       </div>
    );
};

export default Services;