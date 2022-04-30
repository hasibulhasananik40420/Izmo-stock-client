import React from 'react';
import Cars from '../Cars/Cars';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import NewLook from '../NewLook/NewLook';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
             <Header></Header>
            <Products></Products>
             <NewLook></NewLook>
              <Cars></Cars>
              <Contact></Contact>
        </div>
    );
};

export default Home;