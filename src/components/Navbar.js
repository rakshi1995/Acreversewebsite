import React,{useState} from "react";
import { BsTwitter,BsFacebook,BsLinkedin,BsInstagram } from "react-icons/bs";

export default function Navbar() {

    const [show, setshow] = useState(false);
    return (
        <div className=" bg-white overflow-x-hidden fixed  z-50 w-full">
            <nav className="2xl:container 2xl:mx-auto sm:py-2 sm:px-7 py-2 px-4">
                {/* For large and Medium-sized Screen */}
                <div className="flex justify-between ">
                    <div className="hidden sm:flex flex-row items-center space-x-6">
                      <BsFacebook size='1.5em' className="hover:text-blue-600"/>
                       <BsTwitter size='1.5em' className="hover:text-blue-800"/>
                       <BsInstagram size='1.5em' className="hover:text-pink-600"/>
                       <BsLinkedin size='1.5em' className="hover:text-blue-900"/>
                       
                    </div>
                    <div className=" flex space-x-3 items-center">
                       <img src='/logo.png' className="h-12"/>
                      
                    </div>
                    <div className="hidden sm:flex flex-row mt-1">
                    <button className="rounded-full flex space-x-2 w-auto p-4 font-medium text-lg leading-3 text-white bg-indigo-700 focus:outline-none  hover:bg-indigo-600 duration-150 justify-center items-center">Book a Demo</button>
                    </div>
                    {/* Burger Icon */}
                    <div id="bgIcon" onClick={()=>setshow(!show)} className={`focus:outline-none focus:ring-2 mt-3 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}>
                        <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                {/* Mobile and small-screen devices (toggle Menu) */}
                <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>
                    <div className="flex flex-row items-center justify-center space-x-6">
                    <BsFacebook size='1.5em' className="hover:text-blue-600"/>
                       <BsTwitter size='1.5em' className="hover:text-blue-800"/>
                       <BsInstagram size='1.5em' className="hover:text-pink-600"/>
                       <BsLinkedin size='1.5em' className="hover:text-blue-900"/>
                    </div>
                    <div className="flex justify-center  mt-4   ">
                        
                    <button className="rounded-full flex space-x-2 w-full py-5 px-4 font-medium text-xl leading-3 text-white bg-indigo-700 focus:outline-none  hover:bg-indigo-600 duration-150 justify-center items-center">Book a Demo</button>
                    </div>
                </div>
            </nav>
        </div>

    );
}
