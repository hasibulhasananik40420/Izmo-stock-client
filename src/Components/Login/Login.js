import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-full'>
           
         <div className='flex-col shadow-lg p-6 mt-6'>
         <div>
              <h1 className='text-3xl font-bold mt-2'>Login</h1>
              <p className=' font-semibold mt-2 mb-3 text-gray-700'>Doesn't have an account yet ? <Link to='/singup'>SingUp</Link> </p>
          </div>
           <div>
             <form>
               <div>
                <label  htmlFor="email">Email Address</label>
               <input className='w-full py-3 pl-3 mb-6 mt-1 rounded-sm border border-red-400' type="email" name="email" placeholder='Email'/>
               </div>
                <div>
                   <div className='flex justify-between'>
                   <label htmlFor="password"> Enter Password</label>
                   <button> Forget Password?</button>
                   </div>
                    <input className='w-full py-3 pl-3 mb-6 mt-1 rounded-sm border border-red-400' type="password" name="password" placeholder='password' />
                </div>
                 <div>
                     <input className='w-full bg-red-500 text-center py-3 font-bold font-serif text-white text-1xl' type="submit" value="LOGIN" />
                 </div>
             </form>
             <div className='flex justify-evenly items-center mt-2'>
                     <div className='border-b w-32 border-red-400'></div>
                    <div className='text-center p-2 font-semibold'>Or login with </div>
                    <div  className='border-b w-32 border-red-400'></div>
             </div>
              <div className='flex justify-between gap-3 mt-6 mb-2'>
                  <button className='w-2/4 py-2 px-3 border border-red-400 text-xl font-medium'>Google</button>
                  <button className='w-2/4 py-2 px-3 border border-red-400 text-xl font-medium'>Facebook</button>
              </div>
              
           </div>
         </div>

        </div>
    );
};

export default Login;