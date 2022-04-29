import React, { useEffect, useState } from 'react';
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
          <h1 className='text-3xl text-red-400 font-bold text-center mt-8'> Services</h1>

            <div className=' md:grid grid-cols-3 gap-8 ml-10 mt-8'>
            {
                products.map(product=> <Services key={product.id} product={product}></Services>)
            }
        </div>
       </div>
    );
};

export default Products;