import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase.init';
const SingleService = () => {
   
    const [user] = useAuthState(auth)
    const {id} = useParams()
    const [review , setReview] = useState({})
     const {name , img , price ,quantity,suppliername, description  } = review
     useEffect( ()=>{
         const url = `https://polar-castle-21999.herokuapp.com/inventory/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setReview(data)
        })

    },[])

    const handleDelevired=(e)=>{
        e.preventDefault()
         if(quantity>=1){
            const newQuentity = parseInt(quantity -1 )
            const item=  {name , img , price ,quantity:newQuentity, suppliername, description  }
            setReview(item)
            const url = `https://polar-castle-21999.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(item)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                toast('Delevery done.')
                e.target.reset()
            })
         }
        else{
            toast('Sold Out')
        }
    
      }


      const handlerestoked=(e)=>{
        e.preventDefault()
        const restokte = e.target.quantity.value
        const newQuentity = parseInt(quantity)+ parseInt( restokte)
        const item=  {name , img , price ,quantity:newQuentity, suppliername, description  }
        setReview(item)
        const url = `https://polar-castle-21999.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers:{
                'authorization': `${user?.email}  ${localStorage.getItem('accessToken')}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast('Update Successfully')
            e.target.reset()
        })
    
      }



    return (
        <div className='text-center mt-16'>

           

            <div className="mx-auto  flex flex-col items-center  bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-3/4 h-3/4 rounded-t-lg md:ml-3 md:h-auto md:w-2/4 md:rounded-none md:rounded-l-lg" src={img} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">Description : {description}</p>
                        <p className="mb-3 font-bold text-xl text-gray-700 dark:text-gray-400 ">Price : {price}</p>
                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Quantity : {quantity >=1? quantity : 'Sold Out'}</p>
                        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Supplier : {suppliername}</p>
                        <div><button onClick={handleDelevired} className='px-8 py-2 text-white font-bold bg-red-700 rounded-sm hover:bg-orange-700 hover:ease-in-out hover:duration-500'>Delivered</button></div>
                    </div>
                    <ToastContainer></ToastContainer>
            </div>
           
          


            <div className='mt-8'>
               <form onSubmit={handlerestoked}>
                <input className='md:w-1/4 py-2 pl-4 border border-red-700' type="number" name="quantity"  id="" placeholder='Add Quantity' />
                  <div className='mt-8'>
                  <button className='bg-red-600 px-8 py-2 font-body text-white hover:bg-orange-700 hover:ease-in-out hover:duration-500'>Add Now</button>
                  </div>
               </form>
            </div>


        </div>
    );
};

export default SingleService;