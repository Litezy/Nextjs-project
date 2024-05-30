import { submitDetails } from '@/components/actions/serverActions';
import Image from 'next/image';
import React from 'react'



const actionsInComponent = async () =>{
  "use server"
  console.log('It works!')
}
const HomePage = async () => {
  return (
    <div className=' w-full  mt-8 '>
      <div className="w-full md:flex w-3/4 mx-auto items-center justify-between ">
        <div className="flex flex-col items-left  gap-10  w-3/4 mx-auto">
          <h1 className='md:text-6xl text-4xl font-bold md:w-1/2 capitalize tracking-tight'>Creative thoughts agency</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia! Autem natus minima non ducimus!</p>
          <div className=" flex -tems-center gap-4">
            <button className='text-xs px-4 py-3 bg-blue-400 rounded-xl font-bold'>Learn More</button>
            <button className='text-xs px-4 py-3 bg-white text-[#2d2b42] font-bold rounded-xl'>Contact</button>
          </div>
        </div>
        <div className=" relative mx-auto w-fit">
          <Image src='/homepage.png' alt="" width={500} height={300}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage