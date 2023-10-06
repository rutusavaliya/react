import React from "react";
import Logo from './assets/logos.png';
import serach from './assets/home/serach.png'
import heart from './assets/home/heart.png'
import cart from './assets/home/cart.png'
import user from './assets/home/user.png'



export function Dropdown() {
  return (
    <>
    
      <div className="bg-white w-5/6 h-16 ml-24 mt-2 flex align-middle justify-between rounded-md  ">
        <div className="mt-3">
          <img src={Logo} alt=""></img>
        </div>
        <div className="NavBar flex mt-4">
          <div className="group">
            <button className="relative font-bold mx-7 border-b-[2px] border-black  " type="button">Home</button>
            <ul className="absolute top-40 left-[28%] cursor-pointer bg-white font-sans text-gray-800 opacity-0 group-hover:opacity-100 space-y-3 mb-4  shadow-md rounded-lg p-6 duration-500">
              <li className="bg-white font-normal text-[#ff497c] ">Home-Electronics</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-NFT</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-Fashion</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-Jewellery</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-Furniture</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Home-Multipurpose</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">RTL Version</li>
            </ul>
          </div>

          <div className="group">
            <button className=" relative font-bold mx-7 hover:border-b-[2px] border-black" type="button">Shop</button>
            <ul className="bg-white font-bold font-sans text-gray-800  mx-3 cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-6 absolute left-[34%]   top-40  space-y-2">
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Shop With Sidebar</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Shop No Sidebar</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Product Variation 1</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Product Variation 2</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Product Variation 3</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Product Variation 4</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Product Variation 5</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Product Variation 6</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Product Variation 7</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Product Variation 8</li>
            </ul>
          </div>
          <div className="group">
            <button className=" relative font-bold mx-7 hover:border-b-[2px] border-black" type="button">Pages</button>
            <ul className="bg-white font-bold font-sans text-gray-800  mx-3 cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-9 absolute  top-40 left-[43%] space-y-2">
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Whishlist</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Cart</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Checkout</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Account</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Sign Up</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Sign In</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Forgot Password</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Reset Password</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Privacy Policy</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Coming Soon</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">404 Error</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Typography</li>
            </ul>
          </div>
          <div>
            <button className="bg-transparent font-sans text-gray-800 mx-5  cursor-pointer font-bold hover:border-b-[2px] border-black ">
              About</button>
          </div>

          <div className="group">
            <button className=" relative font-bold mx-7 hover:border-b-[2px] border-black " type="button">Blog</button>
            <ul className="bg-white font-bold font-sans text-gray-800   mx-3 cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-10 absolute  top-40 left-[58%] space-y-2">
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Blog List</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Blog Grid</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Standard Post</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Gallary Post</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Video Post</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Audio Post</li>
              <li className="bg-white font-normal hover:text-[#ff497c] duration-300">Quote Post</li>
            </ul>
          </div>

          <div>
            <button className="bg-transparent text-base font-bold font-sans text-gray-800 mx-7  cursor-pointer hover:border-b-[2px] border-black">Contact</button>
          </div>
        </div>
        <div className="flex mr-8">
          <img className="w-8 h-5 pr-3 mt-4" src={serach} alt=""></img>
          <img className="w-8 h-5 pr-3 mt-4" src={heart} alt=""></img>
          <img className="w-8 h-5 pr-3 mt-4" src={cart} alt=""></img>
          <img className="w-8 h-5 pr-3 mt-4" src={user} alt=""></img>
        </div>
      </div>


    </>
  )
}