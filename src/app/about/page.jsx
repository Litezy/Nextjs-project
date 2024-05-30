import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=' w-11/12 mx-auto mt-10 '>
      <div className="w-full md:flex items-center gap-6">
        <div className="flex md:w-1/2 flex-col items-left  gap-4">
          <h1 className='text-sky-400 text-lg font-bold '>About Agency</h1>
          <h1 className="text-white text-4xl text-left font-bold md:w-2/3"> We create digital ideas that are bigger, bolder,braver and better
          </h1>
          <p className='text-sm w-full '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium distinctio repellat impedit quis, reprehenderit ipsam quibusdam, corrupti id in asperiores ut facilis eum porro error quas suscipit debitis cumque. Temporibus magnam voluptatibus, qui esse aspernatur numquam dignissimos quia distinctio facilis earum atque perferendis amet non, placeat maiores? Adipisci, reiciendis corrupti.</p>

          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <h4 className='text-xl text-sky-400 font-bold mt-3'>10 K+</h4>
              <p className='text-xs'>years of experience</p>
            </div>
            <div className="flex flex-col">
              <h4 className='text-xl text-sky-400 font-bold mt-3'>234 K+</h4>
              <p className='text-xs'>people reached</p>
            </div>
            <div className="flex flex-col">
              <h4 className='text-xl text-sky-400 font-bold mt-3'>5 K+</h4>
              <p className='text-xs'>services and plugins</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2  mx-auto mt-10 md:mt-0 relative md:w-[500px] w-[300px] h-[400px]">
          <Image className='rounded-md' src="https://images.pexels.com/photos/19782827/pexels-photo-19782827/free-photo-of-man-walking-on-a-path-by-the-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  fill />
        </div>
      </div>
    </div>
  )
}

export default AboutPage