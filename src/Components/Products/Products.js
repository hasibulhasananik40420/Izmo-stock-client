import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';

const Products = () => {
    const [products , setProducts] = useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    return (
       <div>
          <h1 className='text-3xl text-red-400 font-bold text-center mt-8'> Inventory</h1>

            <div className=' md:grid md:grid-cols-3 md:gap-8 md:ml-10 mt-8'>
            {
                products.map(product=> <Services key={product.id} product={product}></Services>)
            }
            </div>

              <div className='text-center mt-8'>
              <Link to='/manageinventory' className='bg-red-500 px-8 py-2 font-semibold text-white rounded-sm'>Manage Inventories</Link>

              </div>
       </div>
    );
};

export default Products;