import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
const MyItems = () => {
        const [ user] = useAuthState(auth)
         
        //   console.log(user);
        const [myItem , setMyItem] = useState()
        const navigate = useNavigate()
       

        useEffect( () =>{
          const email = user?.email
          fetch(`https://polar-castle-21999.herokuapp.com/myitems?email=${email}`, {
              method: 'GET', 
              headers:{
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
          })
          .then(res => {
              if(res.status === 401 || res.status===403){
                  navigate('/login');
              }
              return res.json()
          })
          .then(data =>{
              console.log(data);
              setMyItem(data);
          })
      }, [])


         
          const handleDelete =(id)=>{
            const prceed = window.confirm('Are you sure to delete this item?')
            if(prceed){
               const url =`https://polar-castle-21999.herokuapp.com/inventory/${id}`
               fetch(url,{
                   method:'DELETE'
               })
               .then(res => res.json())
               .then(data => {
                   console.log(data);
                   const remaining = myItem.filter(product => product._id !== id) 
                   setMyItem(remaining)
               })
   
            }
   
        }

    return (
        <div>
            <h1 className='font-bold text-3xl mt-4 text-center'> My Items : {myItem?.length} </h1>
            

             <div className="md:flex md:flex-col flex-row">
             <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
             <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
             <div className="overflow-hidden">
             <table className="min-w-full">
             <thead className="border-b">
            <tr>
             
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Quentity
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
           
            {
                myItem?.map(item=> 
                    <tr className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                     {item?.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                     {item?.email}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                     {item?.quentity}
                    </td>
                     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                     <button onClick={()=> handleDelete(item?._id)} type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Delete</button>
                    </td>
                  </tr>  
                    )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
              
        </div>
    );
};

export default MyItems;