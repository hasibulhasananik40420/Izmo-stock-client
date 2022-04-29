import React from 'react';
import Cars from '../Cars/Cars';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
             <Header></Header>
             {/* <Services></Services> */}
              <Cars></Cars>
              <Contact></Contact>
        </div>
    );
};

export default Home;