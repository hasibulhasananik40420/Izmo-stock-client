import React from 'react';

const Contact = () => {
    return (
        <div className='md:flex md:justify-around bg-[#3d3d3d] md:py-8'>
            <div className='md:w-2/4 md:ml-8 ml-8'>
                <h1 className='text-3xl text-white font-bold mt-8'>Newsletter</h1>
                <p className='font-semibold mt-6 text-white'>By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!</p>
                 <input className='md:w-3/4 py-2 mt-4  border border-red-800' type="text" />
                 <br />
                 <button className='px-8 py-2 bg-red-500 font-medium mt-4 rounded-md mb-12'> Subscribe</button>
            </div>
            <div className='md:w-3/4 md:ml-10 ml-8'>
                <h1 className='text-3xl text-white font-bold mt-8'>Twitter Feed</h1>
                <p className='font-semibold mt-5 ml-4 text-white'>Check out our latest theme release 'Landscaping' - themeforest.net/item/landscapi…</p>
                <p  className='font-semibold mt-5 ml-4 text-white'>@MrSamHughes Probably the easiest way is to send an email to sales@themesuite.com, or through our ThemeForest profi… twitter.com/i/web/status/8…</p>
            </div>
            <div className='md:w-2/4 ml-8'>
                <h1 className='text-3xl text-white font-bold mt-8'>Contact Us</h1>
                <p className='font-semibold mt-5 ml-4 text-white'>Address: 1234 Street Name, City Name, AB</p>
                <p className='font-semibold mt-5 ml-4 text-white'>Phone: 1-800-123-4567</p>
                <p className='font-semibold mt-5 ml-4 text-white'>Email: sales@company.com</p>
            </div>
            
        </div>
    );
};

export default Contact;