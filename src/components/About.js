import React from 'react'

export const About = () => {
  return (
    <>
         <div className='bg-gray-50'>
            <div className="mx-auto max-w-7xl md:px-10 px-4 md:py-12 py-9">
                <div className="relative rounded-md">
                    <img src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png" alt="city view" className="w-full h-full rounded-2xl  object-center object-fill absolute sm:block hidden" />
                    <img src="https://i.ibb.co/LQpxBsc/mobile.png" alt="city view" className="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                    <div className="text-xl relative  bg-gradient-to-r from-blue-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                        <div>
                            <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">ABOUT US</h1>
                            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <button className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded-full p-4 px-6 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
