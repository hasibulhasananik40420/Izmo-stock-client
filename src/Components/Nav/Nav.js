import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Nav = () => {
   const [open , setOpen] = useState(false)

   return (
     <nav className='p-5 bg-slate-500 shadow md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center'>
           <span className='text-2xl font-medium'>Navbar</span>

         
           
            <span onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden  cursor-pointer'>
                { open? <XIcon></XIcon> :<MenuIcon ></MenuIcon>}
                </span>

        </div>
      
          <ul  className={`left-0  md:flex justify-end md:static  absolute duration-500 transition-all ease-in-out bg-slate-500 w-full ${open ? 'top-12' : 'top-[-500px]'}  `}>
            <li className='mx-4 my-6 md:my-0'> 
               <Link className='text-xl text-white hover:text-cyan-500 duration-500' to='/'>Home</Link>
            </li> 
            <li className='mx-4 my-6 md:my-0'> 
               <Link className='text-xl text-white hover:text-cyan-500 duration-500' to='/blogs'>Blogs</Link>
            </li>
             <li className='mx-4 my-6 md:my-0'> 
               <Link className='text-xl text-white hover:text-cyan-500 duration-500' to='/login'>Login</Link>
            </li>
         </ul>
      

     </nav>
   );
};

export default Nav;