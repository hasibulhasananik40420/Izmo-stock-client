import React from 'react';
import { useForm } from "react-hook-form";
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-2/4 mx-auto mt-8'>
           

            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-red-500 py-2 px-3' {...register("name", )} placeholder='Name'/>
                <input className='border border-red-500 py-2 px-3' {...register("description", )} placeholder='Description'/>
                <input className='border border-red-500 py-2 px-3' {...register("quantity", )} placeholder='Quantity'/>
                <input className='border border-red-500 py-2 px-3' {...register("suppliername", )} placeholder='Supplier Name'/>
                <input className='border border-red-500 py-2 px-3' {...register("price", )} placeholder='Price'/>
                <input className='border border-red-500 py-2 px-3' type="text" {...register("img",)} placeholder='Image Url' />
                <input className='bg-red-500 py-2 font-semibold text-white cursor-pointer' type="submit" />
            </form>
        </div>
    );
};

export default AddItems;