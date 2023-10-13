import React from 'react'

export const Project = () => {
  return (
    <>
        <div className="mx-auto max-w-7xl lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold leading-9 text-gray-800">Latest Project</h1>
                <p className="text-base leading-6 text-center text-gray-600 sm:w-96 md:w-9/12 lg:w-5/12 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
                <div className="relative flex items-center justify-center">
                    <img src="/img1.png" alt="img" className='rounded-2xl'/>
                    <div className="absolute top-0 px-6 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-center py-10">
                        <div className="flex items-center justify-center flex-col py-8 ">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-white">The history of house</h2>
                            {/* <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> */}
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full  hover:bg-yellow-500 hover:text-white transition duration-150 text-lg font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none rounded-full">Book a Demo</button>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <img src="/img3.png" alt="img" className='rounded-2xl'/>
                    <div className="absolute top-0 px-6 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-center py-10">
                        <div className="flex items-center justify-center flex-col py-8">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-7 lg:leading-7 text-center text-white">Minimimalism and modern day architecture</h2>
                          
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full  hover:bg-yellow-500 hover:text-white transition duration-150 text-lg font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none rounded-full">Book a Demo</button>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <img src="/img2.png" alt="img"  className='rounded-2xl'/>
                    <div className="absolute top-0 px-6 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-center py-10">
                        <div className="flex items-center justify-center flex-col py-8">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-white">Layout setting and mood</h2>
                          
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full  hover:bg-yellow-500 hover:text-white transition duration-150 text-lg font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none rounded-full">Book a Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
