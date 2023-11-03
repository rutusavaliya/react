import React from 'react'
import tshirt from '../assets/Blog/tshirt.jpg'
import shoes1 from '../assets/Blog/shoes1.jpg'
import shoes2 from '../assets/Blog/shoes2.jpg'
import blog1 from '../assets/Blog/blog1.png'
import bimg3 from '../assets/Blog/bimg3.jpg'
import bimg4 from '../assets/Blog/bimg4.png'
import blog from '../assets/Blog/blog.png'
import image1 from '../assets/Blog/image1.png'
import bimg1 from '../assets/Blog/bimg1.png'
import { Footer } from '../components/footer'
import { English, USD } from "../components/navbar"
import { Dropdown1, NavBottom } from "../components/navbar1"

function Quotepost() {
  return (
    <>
      <div className=" flex justify-between h-8 text-xs pt-1 bg-black">
        <div className=" flex">
          <English />
          <USD />
        </div>
        <div className=" flex justify-between mr-28 text-gray-400 font-semibold">
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
      <div className='flex justify-center mt-10'>
        <div className='text-2xl text-gray-600 w-[120px] h-10  '>
          <h1 className='text-base ml-5 '>Share on:</h1>
          {/* <ul className=' w-[20px]  hover:text-slate-100  flex flex-wrap '>
                <li className=' mx-4'><i class="ri-heart-line "></i></li>
                <li className=' mx-4'><i class="ri-shopping-cart-line "></i></li>
                <li className=' mx-4'><i class="ri-user-3-line "></i></li>
              </ul> */}
        </div>

        <div className='left-section  '>

          <div className=''>


            <div className=''>
              <h2 className='text-3xl font-medium'>How to generate blog ideas are great for<br></br> businesses that sell both B2B and D2C.</h2>
            </div>


            <div className='flex mt-6 border-b-2 pb-7'>
              <img className='w-10 rounded-full' src={image1} alt=""></img>
              <div className=''>
                <h1 className='ml-5 text-sm'>Theresa Underwood</h1>
                <div className='flex ml-5 text-xs text-[#777777]'>
                  <p>Mar 15, 2022</p>
                  <p className='ml-5'>300k Views</p>
                </div>
              </div>
            </div>

            <div className='text-[13px] mt-5 text-[#777777] leading-5'>
              <p>Habitasse per feugiat aliquam luctus accumsan curae, suspendisse aliquam taciti eros neque,<br></br> aenean sit iaculis risus commodo ut sociosqu rhoncus potenti tristique placerat sit tempus, duis<br></br> erat feugiat cras sociosqu porta ut praesent, fermentum donec convallis tellus vulputate duis nibh<br></br> rhoncus phasellus dui massa nisl.
              </p>
              <p className='pt-5'>Whether you’re kicking off a new campaign or looking to revamp your strategy, the lessons you’ll<br></br> learn will be universal to all small business email marketing.
              </p>
              <p className='pt-5'>MailChimp is an email marketing service provider founded in 2001. It has 9 million users that<br></br> collectively send over 15 billion emails through the service each month.
              </p>
              <p className='pt-5'>
                Email is a crucial channel in any marketing mix, and never has this been truer than for today’s <br></br> entrepreneur. Curious what to say? How to say it? How often to hit “send”? Each bite-sized lesson <br></br> delivers core concepts, guiding questions, and tactical how-to resources.
              </p>
              <p className='pt-5'>Whether you’re kicking off a new campaign or looking to revamp your strategy, the lessons you’ll <br></br>learn will be universal to all small business email marketing.
              </p>
            </div>

            <div className='border-l-4 border-[#FAB4C8] w-[550px] h-52 mt-10 bg-[#f9f3f0] rounded-md pl-10 pt-10  '>
              <p className='text-[13px] text-[#777777]'>“Email is a crucial channel in any marketing mix, and never has this been truer than for <br></br> today’s entrepreneur. Curious what to say? How to say it? How often to hit “send”?<br></br> Each bite-sized lesson delivers core concepts, guiding questions, and tactical how-to<br></br> resources.”</p>
              <div className='flex mt-6'>
                <img className='w-10 rounded-full' src={image1} alt=""></img>
                <div className=''>
                  <h1 className='ml-5 text-sm'>Theresa Underwood</h1>
                  <div className='flex ml-5 text-xs text-[#777777]'>
                    <p>Mar 17, 2019</p>
                    <p className='ml-5'>300k Views</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-8 '>
              <h1 className='text-[23px] font-semibold'>Habitasse per feugiat aliquam luctus accumsan curae</h1>
              <p className='text-[13px] text-[#777777] mt-8'>Email is a crucial channel in any marketing mix, and never has this been truer than for today’s<br></br> entrepreneur. Curious what to say? How to say it? How often to hit “send”? Each bite-sized lesson<br></br> delivers core concepts, guiding questions, and tactical how-to resources.</p>
              <div className='w-[550px] flex mt-8 '>
                <a href="#">
                  <img className='rounded-md' src={bimg1} alt=""></img>
                </a>
                <a href="#">
                  <img className='ml-2 rounded-md' src={bimg4} alt=""></img>
                </a>
              </div>

              <p className='text-[13px] text-[#777777] mt-8'>
                December 03, 2020 - The Nike Air Zoom SuperRep 2 is designed for high-intensity interval training<br></br> (HIIT) in group classes or solo sessions. This second version comes with two updated features for a <br></br>better fit: a fully adjustable, burrito-style tongue and a roomier forefoot.
              </p>
              <p className='text-[13px] text-[#777777] mt-8 leading-5'>
                The SuperRep 2 evolves an important facet of modern fitness — training as sport — and the idea<br></br> that it's deserving of footwear designed to support the performance needs specific to these<br></br> movements. That’s why the shoe keeps the tech from the original SuperRep, like the forefoot Zoom<br></br> Air units for pop on jumps, a reinforced rand to brace against lateral bounds and a flexible “burpee<br></br> break” for everyone’s favorite total-body punisher.
              </p>

              <p className='text-[13px] text-[#777777] mt-8'>
                The Nike Air Zoom SuperRep 2 releases December 10 in China, December 26 throughout EMEA and<br></br> January 4 globally.
              </p>

              <p className='text-[13px] text-[#777777] mt-8'>
                To download hi-res images, click here.
              </p>

            </div>

            <div className='mt-8'>
              <h1 className='text-lg font-semibold'>Leave a Reply</h1>
              <p className='text-[13px] text-[#777777] mt-3'>Your email address will not be published.</p>
              <div className="relative mt-5">
                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                  Leave a Replay
                </label>
                <input
                  className="w-[575px] h-36 border focus:outline focus:outline-[1px] pb-28 text-xs   focus:outline-[#3577f0] mt-2 rounded-lg px-6 text-gray-500"
                  type="text"
                  placeholder="Your Comment"
                ></input>
              </div>
              <div className='flex '>
                <div className="relative mt-8">
                  <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600  text-sm">
                    Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    class="w-[282px] h-12 border mt-2 rounded-lg  px-6 text-gray-500 text-sm "
                    type="text"
                  ></input>
                </div>

                <div className="relative mt-8 ml-3">
                  <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                    Email<span className='text-red-500'>*</span>
                  </label>
                  <input
                    className="w-[282px] h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                    type="text"
                  ></input>
                </div>
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
        </div>

        {/* <right section ---------------------------------> */}

        <div className='right-section ml-2'>
          <div className='border w-[320px] h-80  rounded-md   '>
            <div className='ml-5' >
              <h1 className='mt-3'>Latest Posts</h1>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={blog} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-sm  hover:text-blue-500 duration-500 font-semibold '>Dubai’s FRAME Offers its <br></br> Take on the</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>Mar 27, 2022</h1>
                    <h1 className='pl-2'>300k Views</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={bimg3} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-sm  hover:text-blue-500 duration-500 font-semibold '>Dubai’s FRAME Offers its <br></br> Take on the</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>Mar 27, 2022</h1>
                    <h1 className='pl-2'>300k Views</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={blog1} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-sm  hover:text-blue-500 duration-500 font-semibold '>Dubai’s FRAME Offers its <br></br> Take on the</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>Mar 27, 2022</h1>
                    <h1 className='pl-2'>300k Views</h1>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='border w-[320px] h-80  rounded-md mt-10  '>
            <div className='ml-5' >
              <h1 className='mt-3'>Latest Posts</h1>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={tshirt} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-sm  hover:text-blue-500 duration-500 font-semibold '>Men's Fashion Tshirt</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>$30</h1>
                    <h1 className='pl-2'>$20</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={shoes1} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-sm  hover:text-blue-500 duration-500 font-semibold '>Nike Shoes</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>$200</h1>
                    <h1 className='pl-2'>$150</h1>
                  </div>

                </div>
              </div>
              <div className='flex mt-3 group'>
                <a href="#" className=' w-24 h-16 overflow-hidden rounded-md '>
                  <img className='w-24  h-16 group-hover:scale-110 duration-500' src={shoes2} alt=""></img>
                </a>
                <div className='ml-3'>
                  <a href='#' className='text-sm  hover:text-blue-500 duration-500 font-semibold '>Addidas Shoes</a>
                  <div className='flex text-sm text-[#777777]'>
                    <h1>$300</h1>
                    <h1 className='pl-2'>$200</h1>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='border w-[320px] mt-10 rounded-md h-60'>
            <h1 className='mt-5 ml-5'>Archives List</h1>
            <ul className='ml-5 text-sm mt-6 text-[#777777] '>
              <li className='hover:text-black duration-500'><a href="#">January 2020</a></li>
              <li className='pt-3 hover:text-black duration-500'><a href="#">February 2020</a></li>
              <li className='pt-3 hover:text-black duration-500'><a href="#">March 2020</a></li>
              <li className='pt-3 hover:text-black duration-500'><a href="#">April 2020</a></li>
            </ul>

          </div>

          <div className='border w-[320px] h-40 mt-10 rounded-md'>
            <h1 className='ml-5 mt-5'>Archives Dropdown</h1>
            <div className="relative mt-5">
              <label className="absolute  bg-[#fff]  text-gray-600 text-sm"></label>
              <select
                className="w-72 h-10 ml-3 border mt-2 rounded-lg px-6  text-gray-500 text-sm "
                type="text">
                <option value="">Select Month</option>
                <option value="">April 2020(4)</option>
                <option value="">May 2020(4)</option>
                <option value="">June 2020(4)</option>
                <option value="">July 2020(4)</option>

              </select>
            </div>
          </div>

          <div className='border w-[320px] h-60 rounded-md mt-10'>
            <h1 className='mt-5 ml-5'>Tags</h1>
            <div className='flex ml-5 mt-5 text-xs '>
              <a href="#" className='mr-3 border-[2px] px-3 py-1 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-16'>Design</a>
              <a href="#" className='mr-3  border-[2px] px-4 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-16'>Html</a>
              <a href="#" className='mr-3  border-[2px] px-2 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-16'>Graphic</a>
            </div>

            <div className='flex ml-5 mt-3 text-xs '>
              <a href="#" className='mr-3 border-[2px] px-4 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-28 h-8'>Development</a>
              <a href="#" className='mr-3  border-[2px] px-4 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full h-8 w-28'>UI/UX Design</a>

            </div>

            <div className='flex ml-5 mt-3 text-xs'>
              <a href="#" className='mr-3 border-[2px] px-2 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-20'>ecommerce</a>
              <a href="#" className='mr-3  border-[2px] px-5 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-16'>CSS</a>
              <a href="#" className='mr-3  border-[2px] px-4 py-1 pb-2 text-[#777777] hover:bg-blue-600  hover:text-white duration-500 rounded-full w-12'>JS</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>

  )
}

export default Quotepost
