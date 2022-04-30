import React from 'react';

const NewLook = () => {
    return (
        <div className='md:flex md:justify-around mt-14'>
            <div className='w-2/4 ml-14'>
                <h1 className='text-3xl font-medium'> <span className='text-red-600 font-bold font-serif'>WELCOME</span> <span className='text-red-500 font-serif'>TO YOUR NEW WEBSITE</span></h1>
                <p className='mt-8 font-sans'>Lorem ipsum dolor sit amet, falli tollit cetero te eos. Ea ullum liber aperiri mi, impetus ate philosophia ad duo, quem regione ne ius. Vis quis lobortis dissentias ex, in du aft philosophia, malis necessitatibus no mei. Volumus sensibus qui ex, eum duis doming ad. Modo liberavisse eu mel, no viris prompta sit. Pro labore sadipscing et. Ne peax egat usu te mel vivendo scriptorem. Pro labore sadipscing et. Ne pertinax egat usu te mel vivendo scriptorem.</p>
                <p className='mt-8 font-sans'>Cum ut tractatos imperdiet, no tamquam facilisi qui. Eum tibique onsectetuer in, an referrentur vis, vocent deseruisse ex mel. Sed te idque graecis. Vel ne libris dolores, mel graece mel vivendo scriptorem dolorum.</p>
            </div>


          

          <div className='w-2/4 bg-slate-400 border-2 ml-6 mr-10'>
            {/* <h1  className='text-2xl font-medium ml-6' ><span className='text-red-600 font-bold font-serif'>SEARCH</span> <span className='text-red-500 font-serif'>OUR INVENTORY</span></h1> */}

               <div className='ml-6 md:flex md:mt-5'>
                   <input type="number" placeholder='Min Year'/>
                    <p className='p-1 font-semibold'>To</p>
                   <input type="number" placeholder='Max Year'/>
               </div>
               <div className='gap-3 ml-6'>
               <input className='w-3/4 mt-2' type="number" placeholder='Make'/>
               <input className='w-3/4 mt-2' type="number" placeholder='Model'/>
               <input className='w-3/4 mt-2' type="number" placeholder='Body Style'/>
               </div>
               <div className='md:flex md:justify-around md:w-3/4 mt-4'>
                   <div className='flex items-center'><input type="checkbox"  /> <p className='ml-2'>Certified</p></div>
                   <div className='flex items-center'><input type="checkbox"  /> <p className='ml-2'>CARFAX Verified</p></div>
                   <div className='flex items-center'><input type="checkbox"  /> <p className='ml-2'>Brand New</p></div>
                   
               </div>
               <div className='md:flex md:justify-end gap-3 mt-4'>
                   <button className='px-6 py-1 bg-red-600 font-medium text-white'>Reset</button>
                   <button className='px-6 py-1 bg-red-600 mr-6 font-medium text-white'>Find My New Vehical</button>
               </div>
           
           
           
            </div>
          </div>
    );
};

export default NewLook;