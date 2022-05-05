import React, { useEffect, useState } from 'react';
import auth from '../../Firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../all-images/images/google-logo.png'
const SingUp = () => {
    
     const [userInfo , setUserInfo] = useState({
         email: "",
         password: "",
         confirmPassword: ""
     })

     const [errors , setErrors] = useState({
         emailErrors: "",
         passwordErrors: "",
         general: ""
     })

     const [user] = useAuthState(auth);
     const [createUserWithEmailAndPassword, user2,loading2,error,] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});
     const [signInWithGoogle,] = useSignInWithGoogle(auth);

     //handle  email
     const handleWithEmail=event=>{
        const emailRegex = /\S+@\S+\.\S+/
        const validEmail = emailRegex.test(event.target.value)
        if(validEmail){
            setUserInfo({...userInfo, email: event.target.value})
            setErrors({...errors , emailErrors: ""})
        }
        else{
            setErrors({...errors , emailErrors: "Invalid Email Provied"})
            setUserInfo({...userInfo , email:""})
        }
      
     }
     
        //handle password
        const handleWithPassword= event =>{
            const passwordRegex =   /.{6,}/;
            const validPassword = passwordRegex.test(event.target.value)
            if(validPassword){
                setUserInfo({...userInfo , password: event.target.value})
                setErrors({...errors , passwordErrors: ""})
            }
            else{
                setErrors({...errors, passwordErrors: "Password must be 6 character's"})
                setUserInfo({...userInfo, password:""})
            }
        }


        //confirm passowrd
         const handleConfirmPassword= event=>{
             if(event.target.value === userInfo.password){
                 setUserInfo({...userInfo, confirmPassword: event.target.value})
                 setErrors({...errors, passwordErrors:""})
             }
             else{
                 setErrors({...errors , passwordErrors: "Password din't match"})
                 setUserInfo({...userInfo , confirmPassword:""})
             }
         }
         

         //hanfle form submit
         const handleWithSingUp = event=>{
             event.preventDefault()
             createUserWithEmailAndPassword(userInfo.email , userInfo.password ,userInfo.confirmPassword)

         }
         
         //handle google
         const handleWithGoogle =event=>{
            signInWithGoogle(userInfo.email , userInfo.password)
         }

         const naviagte= useNavigate()
         const location = useLocation()
         const from = location.state?.from?.pathname || '/'
         if(user){
            naviagte(from ,{replace:true})
         }


       
    return (
        <div className='flex justify-center items-center h-full '>
           
         <div className='flex-col shadow-lg p-6 '>
         <div className='text-center'>
              <h1 className='text-3xl font-bold mt-2 mb-3'>SingUp</h1>
          </div>
           <div>
             <form onSubmit={handleWithSingUp}>
               <div>
                <label  htmlFor="email">Email Address</label>
                <input onChange={handleWithEmail} className='w-full py-3 pl-3 mb-6 mt-1 rounded-sm border border-red-400' type="email" name="email" placeholder='Email'/>
                 {errors?.emailErrors && <p className='text-red-400 font-semibold'>{errors.emailErrors}</p>}
               </div>
                <div>
                   <label htmlFor="password"> Enter Password</label>
                    <input onChange={handleWithPassword} className='w-full py-3 pl-3 mb-6 mt-1 rounded-sm border border-red-400' type="password" name="password" placeholder='password' />
                    {errors?.passwordErrors && <p className='text-red-400 font-semibold'>{errors.passwordErrors}</p>}
                </div>
                 <div>
                   <label htmlFor="password"> Confirm Password</label>
                    <input onChange={handleConfirmPassword} className='w-full py-3 pl-3 mb-6 mt-1 rounded-sm border border-red-400' type="password" name="password" placeholder='Confirm Password' />
                </div>
                 <div>
                     <input className='w-full bg-red-500 text-center py-3 font-bold font-serif text-white text-1xl rounded-sm cursor-pointer' type="submit" value="SING UP" />
                 </div>
                  {/* {errorElement?.message} */}
             </form>
             <ToastContainer />
             <div className='flex justify-evenly items-center mt-2'>
                     <div className='border-b w-32 border-red-400'></div>
                    <div className='text-center p-2 font-semibold'>Or login with </div>
                    <div  className='border-b w-32 border-red-400'></div>
             </div>
              <div className='flex justify-between gap-3 mt-6 mb-2'>
                  <button onClick={()=>handleWithGoogle()} className='w-2/4 py-2 px-3 border border-red-400 text-xl font-medium'> <span className='flex items-center justify-center'> <img className='md:w-[25px] mr-4' src={logo} alt="" /> Google</span> </button>
                  <button className='w-2/4 py-2 px-3 border border-red-400 text-xl font-medium'>Facebook</button>
              </div>
              
           </div>
         </div>

        </div>
    );
};

export default SingUp;