import React from 'react'
import { Footer } from '../components/footer'
import { English, USD } from "../components/navbar"
import { Dropdown1, NavBottom } from "../components/navbar1"
import policyimg from '../assets/page/policyimg.png'

function Contact() {
    return (
        <>

            <div className=" flex justify-between h-8 text-xs pt-1 bg-black">
                <div className=" flex">
                    <English />
                    <USD />
                </div>
                <div className=" flex justify-between mr-48 text-gray-400 font-semibold">
                    <div>
                        <a href="#" className="py-1.5 px-3 flex  items-center cursor-pointer hover:text-blue-600 duration-500 ">Help</a>
                    </div>
                    <div>
                        <a href="#" className="py-1.5 px-3 flex items-center cursor-pointer hover:text-blue-600 duration-500 ">Join US</a>
                    </div>
                    <div>
                        <a href="#" className="py-1.5 px-3 flex items-center cursor-pointer hover:text-blue-600 duration-500 ">Sign In</a>
                    </div>
                </div>

            </div>

            <div>
                <div>
                    <Dropdown1 />

                </div>
            </div>
            <div>
                <NavBottom />
            </div>

            <div className='bg-gray-100 flex justify-between h-52'>
                <div className='ml-10 mt-20'>
                    <h1 className='text-4xl font-semibold'>Privacy Policy</h1>
                </div>
                <div className='mt-10 mr-10'>
                    <img src={policyimg} alt="">
                    </img>
                </div>
            </div>

            <div className='flex justify-center mt-10'>
                <div>
                    <div>
                        <h1 className='font-semibold text-lg'>We would love to hear from you.</h1>
                        <p className='text-xs text-gray-600'>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                        <div className='flex '>
                            <div className="relative mt-8">
                                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600  text-sm">
                                     Name <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    class="w-52 h-12 border mt-2 rounded-lg  px-6 text-gray-500 text-sm "
                                    type="text"
                                    
                                ></input>
                            </div>

                            <div className="relative mt-8 ml-3">
                                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                phone<span className='text-red-500'>*</span>
                                </label>
                                <input
                                    className="w-52 h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                    type="text"
                                    
                                ></input>
                            </div>

                            <div className="relative mt-8 ml-3">
                                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                    E-mail<span className='text-red-500'>*</span>
                                </label>
                                <input
                                    className="w-52 h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                    type="text"
                                
                                ></input>
                            </div>
                        </div>
                        <div className="relative mt-8 ">
                                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                    Your message<span className='text-red-500'>*</span>
                                </label>
                                <input
                                    className="w-[650px] h-40 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                    type="text"
                                
                                ></input>
                            </div>

                            <div className='mt-8'>
                    <a href="#" className='relative z-10 font-bold bg-[#3577F0] text-white py-3 px-6 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-20
                                                before:py-6
                                                before:bg-[#3577F0]
                                                before:left-0
                                                before:top-0
                                                before:right-0 
                                                before:bottom-0
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:rounded-md
                                               '>Send Message</a>
                  </div>
                    </div>
                </div>
                <div className='ml-10'>
                    <div>
                        <h1 className='font-medium'>Our Store</h1>
                        <p className='text-sm text-gray-500 mt-5'>8212 E. Glen Creek Street Orchard Park, NY 14127,<br/> United States of America</p>
                        <p className='mt-6  text-gray-500 text-sm'>Phone: +123 456 7890</p>
                        <p className=' text-gray-500 text-sm'>Email: Hello@etrade.com</p>
                    </div>

                    <div className='mt-6'>
                        <h1 className='font-semibold text-lg'>Careers</h1>
                        <p className='text-xs text-gray-600 font-normal pt-3'>Instead of buying six things, one that you really like.</p>
                    </div>

                    <div className='mt-7'>
                     <h1 className='text-lg font-semibold'>Opening Hours:</h1>
                     <p className='text-sm text-[#777777] pt-4'>Monday to Saturday: 9am - 10pm</p>
                     <p className='text-sm text-[#777777] '>Sundays: 10am - 6pm</p>
 </div>
                </div>
            </div>

            <div>
            <Footer/>
           </div>
        </>

    )
}

export default Contact
