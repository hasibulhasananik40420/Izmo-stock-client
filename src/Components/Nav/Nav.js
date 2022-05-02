import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
const Nav = () => {
   const [open, setOpen] = useState(false)
   const [user] = useAuthState(auth)
   //logout
   const handleLogout = () => {
      signOut(auth)
   }
   return (
      <nav className='p-5 bg-slate-500 shadow md:flex md:items-center md:justify-between'>
         <div className='flex justify-between items-center'>
            <span className='text-2xl font-medium'>Navbar</span>



            <span onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden  cursor-pointer'>
               {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}
            </span>

         </div>

         <ul className={`left-0 md:mr-12 md:flex justify-end md:static  absolute duration-500 z-40 transition-all ease-in-out bg-slate-500 w-full ${open ? 'top-12' : 'top-[-500px]'}  `}>
            <li className='mx-4 my-6 md:my-0'>
               <Link className='text-xl text-white hover:text-cyan-500 duration-500' to='/'>Home</Link>
            </li>
            <li className='mx-4 my-6 md:my-0'>
               <Link className='text-xl text-white hover:text-cyan-500 duration-500' to='/blogs'>Blogs</Link>
            </li>

            {
               user && <>
                  {/* <Link className='text-xl text-white md:mr-6 md:ml-1 hover:text-cyan-500 duration-500' to='/manageitem'>Manage Items</Link>
                  <Link className='text-xl text-white md:mr-6 hover:text-cyan-500 duration-500' to='/additem'>Add Item</Link>
                  <Link className='text-xl text-white md:mr-6 hover:text-cyan-500 duration-500' to='/myitem'>My Item</Link> */}


                  <li className='mx-4 my-6 md:my-0'>
                     <Link className='text-xl text-white hover:text-cyan-500 duration-500' to='/manageitem'>Manage Items</Link>
                  </li>

                  <li className='mx-4 my-6 md:my-0'>
                     <Link className='text-xl text-white hover:text-cyan-500 duration-500' to='/additem'>Add Item</Link>
                  </li>

                  <li className='mx-4 my-6 md:my-0'>
                     <Link className='text-xl text-white hover:text-cyan-500 duration-500' to='/myitem'>My Item</Link>
                  </li>

               </>
            }

            {
               user ?
                  <button className='text-xl text-white hover:text-cyan-500 duration-500' onClick={() => handleLogout()}>Singout</button>
                  :

                  <li className='mx-4 my-6 md:my-0'>
                     <Link className='text-xl text-white hover:text-cyan-500 duration-500' to='/login'>Login</Link>
                  </li>
            }

         </ul>


      </nav>
   );
};

export default Nav;