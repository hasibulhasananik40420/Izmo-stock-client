import React from 'react';
import Cars from '../Cars/Cars';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
             <Header></Header>
            <Products></Products>
              <Cars></Cars>
              <Contact></Contact>
        </div>
    );
};

export default Home;