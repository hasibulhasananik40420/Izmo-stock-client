import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    //logout
    const handleLogout=()=>{
        signOut(auth)
    }
    return (
        <div className='flex justify-between bg-slate-800 px-2 py-3'>
           <div>
               <h1 className='text-white'>Nabvar</h1>
           </div>

            <div>
                <Link className='mr-10 text-1xl text-white' to='/'> Home</Link>
                {
                    user? 
                    <button className='mr-10 text-1xl text-white' onClick={()=>handleLogout()}>log Out</button>
                     :
                    <Link className='mr-10 text-1xl text-white' to='/login'> Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;