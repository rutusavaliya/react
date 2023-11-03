import React from "react";
import Logos from "../assets/page/logos.png"
import serach from '../assets/home/serach.png'
import heart from '../assets/home/heart.png'
import cart from '../assets/home/cart.png'
import user from '../assets/home/user.png';
import './dropdown.css'


export function Dropdown() {
  return (
    <>

      <div className='flex justify-between px-10 h-20 bg-white rounded-md items-center  hover:shadow-md w-4/5 mx-24 ml-32 fixed z-20 '>
        <div>
          <img src={Logos} alt="" />
        </div>

        <div className='navbar flex justify-between p-0 m-0'>
          <div className='home-dropdown'>
            <button className='home-button underline decoration-[3px] underline-offset-4 h-24'>Home<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
            <div className='home-content'>
              <ul className='list bg-white rounded-md'>
                <li><a className='text-[#ff497c]' href="">Home-Electronics</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Home-NFT</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Home-Fashion</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Home-Jewellery</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Home-Furniture</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Home-Multipurpose</a></li>
                <li><a className='hover:text-[#ff497c]' href="">RTL Version</a></li>
              </ul>
            </div>
          </div>

          <div className='home-dropdown'>
            <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>Shop<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
            <div className='home-content'>
              <ul className='list bg-white rounded-md'>
                <li><a className='hover:text-[#ff497c]' href="">Shop With Sidebar</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Shop No Sidebar</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Product Variation 1</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Product Variation 2</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Product Variation 3</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Product Variation 4</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Product Variation 5</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Product Variation 6</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Product Variation 7</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Product Variation 8</a></li>
              </ul>
            </div>
          </div>

          <div className='home-dropdown'>
            <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>Pages<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
            <div className='home-content'>
              <ul className='list bg-white rounded-md'>
                <li><a className='hover:text-[#ff497c]' href="">Wishlist</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Cart</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Checkout</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Account</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Sign Up</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Sign In</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Forgot Password</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Reser Password</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Privacy Policy</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Coming Soon</a></li>
                <li><a className='hover:text-[#ff497c]' href="">404 Error</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Typography</a></li>
              </ul>
            </div>
          </div>

          <div className='home-dropdown'>
            <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>About</button>
          </div>

          <div className='home-dropdown'>
            <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>Blog<i class="fa-solid fa-angle-down text-gray-500 transition-all text-xs ml-1"></i></button>
            <div className='home-content'>
              <ul className='list bg-white rounded-md'>
                <li><a className='hover:text-[#ff497c]' href="">Blog List</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Blog Grid</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Standard Post</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Gallery Post</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Video Post</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Audio Post</a></li>
                <li><a className='hover:text-[#ff497c]' href="">Quote Post</a></li>
              </ul>
            </div>
          </div>

          <div className='home-dropdown'>
            <button className='home-button hover:underline decoration-[3px] underline-offset-4 h-24'>Contact</button>
          </div>

        </div>
        <div className="flex mr-8">
        <img className="  w-8 h-5 pr-3 mt-2 ml-16" src={serach} alt=""></img>
        <img className="  w-8 h-5 pr-3 mt-2" src={heart} alt=""></img>
        <img className=" w-8 h-5 pr-3 mt-2" src={cart} alt=""></img>
        <img className=" w-8 h-5 pr-3 mt-2" src={user} alt=""></img>
      </div>
        
      </div>
     

    </>
  )
}