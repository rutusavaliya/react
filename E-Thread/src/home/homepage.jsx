import { English, USD } from '../home'
import Poster1 from '../assets/home/Poster1.png';
import Poster2 from '../assets/home/Poster2.png';
import giftbox from '../assets/home/giftbox.png';
import keyimg from '../assets/home/keyimg.png';
import returnimg1 from '../assets/home/returnimg1.png';
import returnimg2 from '../assets/home/returnimg2.png';
import helpimg from '../assets/home/helpimg.png';
import { Footer } from "../components/footer"
import Components from "../components/components"
import { Dropdown } from "../components/dropdown"
import './homepage.css'


function HomePage() {
    return (
        <>
            <div className=" h-screen bg-[#f9f3f0]">
                <div className=" flex justify-between">
                    <div className=" flex">
                        <English />
                        <USD />
                    </div>
                    <div className=" flex justify-between mr-28">
                        <div>
                            <a href="#" className="py-1.5 px-3 flex  items-center cursor-pointer hover:text-blue-600 duration-500 text-gray-500">Help</a>
                        </div>
                        <div>
                            <a href="#" className="py-1.5 px-3 flex items-center cursor-pointer hover:text-blue-600 duration-500 text-gray-500">Join US</a>
                        </div>
                        <div>
                            <a href="#" className="py-1.5 px-3 flex items-center cursor-pointer hover:text-blue-600 duration-500 text-gray-500">Sign In</a>
                        </div>
                    </div>
                </div>
                <div>
                    <Dropdown />
                </div>
            </div>



            <section className='HEADPHONES-PHOTO  mb-[100px] px-24 mt-28 '>
                <div className='relative mx-auto w-[960px] h-[450px] rounded-md bg-[#F6F7FB] '>
                    <img className='absolute right-28 -top-24 w-96' src="./src/assets/home/asset 20.png" alt="" />
                    <div className='music-signal'>
                        <div className='item-circle circle-1'></div>
                        <div className='item-circle circle-2'></div>
                        <div className='item-circle circle-3'></div>
                        <div className='item-circle circle-4'></div>
                        <div className='item-circle circle-5'></div>
                    </div>

                    <div className='absolute top-16 left-16'>
                        <div className='flex mb-3'>
                            <i className="ri-headphone-line h-6 w-6 text-base border bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
                            <h1 className='text-[#FF497C] font-bold text-sm flex items-center ml-2'>Don’t Miss!!</h1>
                        </div>
                        <p className='font-bold text-4xl text-[#292930] leading-tight tracking-wide'>Enhance Your<br /> Music Experience</p>
                        <div className='flex my-[30px]'>
                            <div className='bg-white text-[#292930] rounded-full py-3 px-7 mr-4 '>
                                <p className='flex justify-center text-2xl'>0</p>
                                <p className='text-sm text-gray-500 font-medium '>Day</p>
                            </div>
                            <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                <p className='flex justify-center text-2xl'>00</p>
                                <p className='text-sm text-gray-500 font-medium '>Hrs</p>
                            </div>
                            <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                <p className='flex justify-center text-2xl'>00</p>
                                <p className='text-sm text-gray-500 font-medium '>Min</p>
                            </div>
                            <div className='bg-white text-[#292930] rounded-full py-3 px-6 mr-4 '>
                                <p className='flex justify-center text-2xl'>00</p>
                                <p className='text-sm text-gray-500 font-medium '>Sec</p>
                            </div>
                        </div>

                        <div className='relative group z-10 '>
                            <a href='#' className='absolute px-9 py-4 text-white font-bold rounded-md bg-[#3577F0]  
                                before:content-[""]
                                before:w-[162px]
                                before:[50px]
                                before:bg-[#3577F0]  
                                before:absolute
                                before:group-hover:scale-110
                                before:top-0
                                before:left-1
                                before:rounded-md
                                before:duration-300
                                before:right-0
                                before:bottom-0
                                before:-z-10'
                            >Check it Out!</a>
                        </div>

                    </div>
                </div>
            </section>

            <section className='FEED-BACK'>
                <div className='bg-[#F9F3F0]  px-24 py-24'>
                    <div className="flex justify-between ">
                        <div className='mb-10'>
                            <p className="text-[#FF497C] font-medium mb-2"><i class="ri-double-quotes-l bg-[#FF497C] p-1 text-white rounded-full text-center mr-3"></i>Testimonials</p>
                            <h1 className="font-bold text-4xl text-[#292930]  tracking-wide">Users Feedback</h1>
                        </div>
                        <div className='text-gray-400'>
                            <a href="#"><i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i></a>
                            <a href="#"><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></a>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-8'>
                        <div>
                            <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg'>
                                <p className='text-xs'>“ It’s amazing how much easier it has been to
                                    meet new people and create instantly non
                                    connections. I have the exact same personal
                                    the only thing that has changed is my mind
                                    set and a few behaviors. “</p>
                            </div>
                            <div className='flex items-center mt-10'>
                                <img className='w-10' src="./src/assets/home/asset 31.png" alt="" />
                                <div className='ml-5'>
                                    <h1 className='text-gray-500'>Head Of Idea</h1>
                                    <h1 className='font-semibold text-lg text-[#292930] tracking-wide'>James C. Anderson</h1>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg'>
                                <p className='text-xs'>“ It’s amazing how much easier it has been to
                                    meet new people and create instantly non
                                    connections. I have the exact same personal
                                    the only thing that has changed is my mind
                                    set and a few behaviors. “</p>
                            </div>
                            <div className='flex items-center mt-10'>
                                <img className='w-10 ' src="./src/assets/home/asset 29.png" alt="" />
                                <div className='ml-5'>
                                    <h1 className='text-gray-500'>Head Of Idea</h1>
                                    <h1 className='font-semibold text-lg text-[#292930] tracking-wider'>James C. Anderson</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='bg-white p-12 text-gray-500 leading-7 rounded-lg'>
                                <p className='text-xs'>“ It’s amazing how much easier it has been to
                                    meet new people and create instantly non
                                    connections. I have the exact same personal
                                    the only thing that has changed is my mind
                                    set and a few behaviors. “</p>
                            </div>
                            <div className='flex items-center mt-10'>
                                <img className='w-10' src="./src/assets/home/asset 30.png" alt="" />
                                <div className='ml-5'>
                                    <h1 className='text-gray-500'>Head Of Idea</h1>
                                    <h1 className='font-semibold text-lg text-[#292930] tracking-wider'>James C. Anderson</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

              {/* <Trade section start ----------------------------------> */}

            <section className='TRADE-STORE px-24'>
                <div>
                    <div className='mt-14'>
                        <div className='mb-12 text-center'>
                            <p className="text-[#8C71DB] font-medium mb-2"><i class="ri-shining-2-fill bg-[#8C71DB] p-1 text-white rounded-full text-center mr-3"></i>Most Sold</p>
                            <h1 className="font-bold text-4xl text-[#292930] ">Most Sold in eTrade Store</h1>
                        </div>
                    </div>

                    <div className='flex justify-center'>

                        <div className='flex justify-between  w-[460px] h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 32.png" alt="" />
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Media Remote</a>
                                    <p className='text-sm font-bold'>$29.99 <span className='text-gray-300 ml-2'><del>$49.99</del></span></p>
                                </div>
                            </div>
                            <div >
                                <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                            </div>
                        </div>

                        <div className='flex justify-between w-[460px] ml-5 h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 33.png" alt="" />
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>50+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>HD Camera</a>
                                    <p className='text-sm font-bold'>$49.99 </p>
                                </div>
                            </div>
                            <div >
                                <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                            </div>
                        </div>


                    </div>

                    <div className='flex justify-center mt-10'>

                        <div className='flex justify-between  w-[460px] h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 32.png" alt="" />
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Media Remote</a>
                                    <p className='text-sm font-bold'>$29.99 <span className='text-gray-300 ml-2'></span></p>
                                </div>
                            </div>
                            <div >
                                <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                            </div>
                        </div>

                        <div className='flex justify-between w-[460px] ml-5 h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 33.png" alt="" />
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>50+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>HD Camera</a>
                                    <p className='text-sm font-bold'>$49.99 </p>
                                </div>
                            </div>
                            <div >
                                <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                            </div>
                        </div>


                    </div>

                    <div className='flex justify-center mt-10'>

                        <div className='flex justify-between  w-[460px] h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 32.png" alt="" />
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Media Remote</a>
                                    <p className='text-sm font-bold'>$29.99 <span className='text-gray-300 ml-2'></span></p>
                                </div>
                            </div>
                            <div >
                                <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                            </div>
                        </div>

                        <div className='flex justify-between w-[460px] ml-5 h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 33.png" alt="" />
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>50+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>HD Camera</a>
                                    <p className='text-sm font-bold'>$49.99 </p>
                                </div>
                            </div>
                            <div >
                                <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                            </div>
                        </div>


                    </div>

                    <div className='flex justify-center mt-10'>

                        <div className='flex justify-between  w-[460px] h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 32.png" alt="" />
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>100+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>Media Remote</a>
                                    <p className='text-s font-bold'>$29.99 <span className='text-gray-300 ml-2'></span></p>
                                </div>
                            </div>
                            <div >
                                <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                            </div>
                        </div>

                        <div className='flex justify-between w-[460px] ml-5 h-40 items-center border rounded-md p-7 group hover:shadow-lg hover:duration-500 hover:border-none duration-[0.9s]'>
                            <div className='flex items-center '>
                                <div className='overflow-hidden rounded-md'>
                                    <a href="#">
                                        <img className='rounded-md group-hover:scale-110 duration-500' src="./src/assets/home/asset 33.png" alt="" />
                                    </a>
                                </div>
                                <div className='pl-8 leading-7'>
                                    <div className='flex items-center'>
                                        <span className='text-[#FFA800]'>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </span>
                                        <div>
                                            <h1 className='text-xs font-bold ml-2'>50+ <span className='text-gray-600 text-xs font-semibold'>Reviews</span> </h1>
                                        </div>
                                    </div>
                                    <a href="#" className='text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700'>HD Camera</a>
                                    <p className='text-sm font-bold'>$49.99 </p>
                                </div>
                            </div>
                            <div >
                                <a href="#" className='block mb-6'><i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                                <a href="#" ><i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i></a>
                            </div>
                        </div>


                    </div>


                </div>
            </section>

                                    {/* <Tread section end ------------------------------> */}

            <div className="mt-10">
                <div>
                    <h1 className=" text-center text-3xl font-semibold">Why People Choose Us</h1>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="border border-gray-200 w-44 h-40 mr-4 rounded-md ">
                        <img className="pl-16 mt-6 w-28" src={giftbox} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">Fast $ secure<br></br>Delivery</p>
                    </div>
                    <div className="border border-gray-200 w-44 h-40 mr-4 rounded-md">
                        <img className="pl-16 mt-6 w-28" src={keyimg} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">100% Guarantee<br></br>On Product</p>
                    </div>
                    <div className="border border-gray-200 w-44 h-40 mr-4 rounded-md ">
                        <img className="pl-16 mt-6 w-28" src={returnimg1} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">24 Hour Return<br></br>Policy</p>
                    </div>
                    <div className="border border-gray-200 w-44 h-40 mr-4 rounded-md ">
                        <img className="pl-16 mt-6 w-28" src={returnimg2} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">24 Hour return<br></br>Policy</p>
                    </div>
                    <div className="border border-gray-200 w-44 h-40 mr-4 rounded-md">
                        <img className="pl-16 mt-6 w-28" src={helpimg} alt=""></img>
                        <p className="text-center mt-2 font-semibold text-sm">Next Leval Pro<br></br>Quality</p>
                    </div>
                </div>
            </div>


            <div className="blog-section flex justify-center  mb-10 mt-10 mr-4">
                <div className="left-part w-[460px] overflow-hidden rounded-md group mx-4 relative">
                    <a href="#"><img src={Poster1} className="group-hover:scale-110 duration-500" alt="" /> </a>
                    <div className="content absolute top-11 right-12">
                        <h1 className="text-white text-4xl font-sans font-bold mb-s">Rich sound,<br></br>for less.</h1>
                        <a href="#" className="text-gray-600 font-medium group-hover:text-white duration-500">Collection</a>
                    </div>
                </div>
                <div className="left-part w-[460px] overflow-hidden group rounded-md mx-4 relative">
                    <a href="#"><img src={Poster2} className="group-hover:scale-110 duration-500" alt="" /> </a>
                    <div className="content absolute top-11  left-10">
                        <a href="#" className="text-gray-600 font-medium group-hover:text-white duration-500">50% offer in winter</a>
                        <h1 className="text-white text-4xl font-sans font-bold mb-s">Get VR<br></br>Reality Glass</h1>
                    </div>
                </div>
            </div>
            <div>
                <Components />
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}


export default HomePage

