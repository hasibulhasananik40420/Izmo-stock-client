import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import Cars from '../Cars/Cars';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import NewLook from '../NewLook/NewLook';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    const [review ,setReview] = useReview([])
    const sixCart = review.slice(0,6)
    return (
        <div>
           
             <Header></Header>
             <h1 className='text-3xl text-red-400 font-bold text-center mt-8'> Inventory</h1>
             <div className=' md:grid md:grid-cols-3 md:gap-8 md:ml-10 '>
             
             {
                  sixCart.map(product=> <Services key={product.id} product={product}></Services>)
              }
             </div>
             <div className='text-center mt-14'>
            <Link to='/manageitem' className='bg-red-500 px-8 py-3 font-semibold text-white rounded-sm'>Manage Inventories</Link>

            </div>
             <NewLook></NewLook>
              <Cars></Cars>
              <Contact></Contact>
        </div>
    );
};

export default Home;