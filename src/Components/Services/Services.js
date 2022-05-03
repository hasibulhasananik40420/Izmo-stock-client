import React from 'react';

const Services = ({product}) => {
     const {name ,price ,description ,quantity ,suppliername , img} = product
    return (

       <div>

            <div className="mt-8 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            
                <img className="p-8 rounded-t-lg" src={img} alt="" />
           
                  <div className="px-5 pb-5">
              
                   <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                   <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{description}</h5>
                    <p>Quantity : {quantity}</p>
                    <p>supplier Name : {suppliername}</p>
              
               <div className="flex justify-between items-center">
                   <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
                   <button className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Stock Update</button>
               </div>
           </div>
       </div>

       </div>
    );
};

export default Services;