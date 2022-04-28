import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between bg-slate-800 px-2 py-3'>
           <div>
               <h1 className='text-white'>Nabvar</h1>
           </div>

            <div>
                <Link className='mr-10 text-1xl text-white' to='/'> Home</Link>
                <Link className='mr-10 text-1xl text-white' to='/login'> Login</Link>
            </div>
        </div>
    );
};

export default Navbar;