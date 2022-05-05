// import React from 'react';
// import { Link } from 'react-router-dom';
// import useReview from '../../Hooks/useReview';
// import Services from '../Services/Services';

// const ManageItems = () => {
//     const [review, setReview] = useReview([])
//     return (
//         <div>

//           <div className=' md:grid md:grid-cols-3 md:gap-8 md:ml-10 mt-8'>
//           {
//               review.map(product=> <Services key={product._id} product={product}></Services>)
//           }
//           </div>

//           <div className='text-center mt-14'>
//             <Link to='/additem' className='bg-red-500 px-8 py-3 font-semibold text-white rounded-sm'>Manage Inventories</Link>

//             </div>
//      </div>
//     );
// };

// export default ManageItems;