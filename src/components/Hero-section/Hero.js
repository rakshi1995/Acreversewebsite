import React from 'react'
import  './herostyle.css'

export const Hero = () => {
  return (
    <>
        <div className='hero'>
        <video autoPlay loop muted plays-inline className='back-video'>
<source src='/indoor_home.mp4' type='video/mp4' />
        </video>

      <div className='content'>
        <h1 className='w-full lg:text-8xl md:text-7xl text-5xl'>Let us help you find your dream home.</h1>
        <div className="flex justify-center items-center mt-10">
      <button className="ml-4 border border-gray-100 focus:outline-none  bg-transparent transition duration-150 ease-in-out  lg:text-2xl lg:font-bold  hover:bg-yellow-500 rounded-full text-white px-4 sm:px-10 py-2 sm:py-4 text-xl">Book a Demo</button>
      </div>
      </div> 
      
      </div>
    
    </>
  )
}
