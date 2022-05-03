import React from 'react';
import { useForm } from "react-hook-form";
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-2/4 mx-auto mt-8'>
           

            <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-red-500 py-2 px-3' {...register("name", )} placeholder='name'/>
                <input className='border border-red-500 py-2 px-3' {...register("description", )} placeholder='description'/>
                <input className='border border-red-500 py-2 px-3' {...register("quantity", )} placeholder='quantity'/>
                <input className='border border-red-500 py-2 px-3' {...register("suppliername", )} placeholder='suppliername'/>
                <input className='border border-red-500 py-2 px-3' {...register("price", )} placeholder='price'/>
                <input className='border border-red-500 py-2 px-3' type="text" {...register("img",)} placeholder='img' />
                <input className='bg-red-500 py-2 font-semibold text-white cursor-pointer' type="submit" />
            </form>
        </div>
    );
};

export default AddItems;