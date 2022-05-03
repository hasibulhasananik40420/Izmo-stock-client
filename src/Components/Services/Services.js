import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = ({product}) => {
     const {name ,price ,description ,quantity ,suppliername , img, _id} = product


     const navigate = useNavigate()
     
     const navigateToServiceDetail=id=>{
        navigate(`/singleservice/${id}`)
     }
    return (

       <div>

            <div className="mt-8 max-w-sm bg-white rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            
                <img className="p-8 rounded-t-lg" src={img} alt="" />
           
                  <div className="px-5 pb-5">
              
                   <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                   <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{description}</h5>
                    <p className="text-xl font-medium text-gray-900 dark:text-white">Quantity : {quantity}</p>
                    <p className="text-xl font-medium text-gray-900 dark:text-white">Supplier: {suppliername}</p>
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">{price}</span>
              
               <div className="flex justify-between items-center">
               {/* onClick={()=>navigateToServiceDetail(_id)} */}
                   <button  onClick={()=>navigateToServiceDetail(_id)} className="mt-2 text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Stock Update</button>
                   <button className="mt-2 text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delate</button>
               </div>
           </div>
       </div>

       </div>
    );
};

export default Services;