import * as React from "react";
import { English,  USD } from './home';
import { Dropdown } from './dropdown';
import Poster1 from './assets/home/Poster1.png';
import Poster2 from './assets/home/Poster2.png';
import giftbox from './assets/home/giftbox.png';
import keyimg from './assets/home/keyimg.png';
import returnimg1 from './assets/home/returnimg1.png';
import returnimg2 from './assets/home/returnimg2.png';
import helpimg from './assets/home/helpimg.png';
import { Footer } from './footer';
import Components from "./components";


function App() {

  return (
  <>
    <div className=" h-screen bg-[#f9f3f0]">
      <div className=" flex justify-between">
        <div className=" flex">
          <English/>
          <USD />
        </div>
        <div className=" flex justify-between mr-24">
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
        <a href="#"><img src={Poster1} className="group-hover:scale-110 duration-500" alt=""/> </a>
        <div className="content absolute top-11 right-12">
          <h1 className="text-white text-4xl font-sans font-bold mb-s">Rich sound,<br></br>for less.</h1>
          <a href="#" className="text-gray-600 font-medium group-hover:text-white duration-500">Collection</a>
        </div>
      </div>
      <div className="left-part w-[460px] overflow-hidden group rounded-md mx-4 relative">
        <a href="#"><img src={Poster2} className="group-hover:scale-110 duration-500" alt=""/> </a>
        <div className="content absolute top-11  left-10">
          <a href="#" className="text-gray-600 font-medium group-hover:text-white duration-500">50% offer in winter</a>
          <h1 className="text-white text-4xl font-sans font-bold mb-s">Get VR<br></br>Reality Glass</h1>
        </div>
      </div>
    </div>
     <div>
      <Components/>
     </div>   

    <div>
      <Footer />
    </div>
  </>

 );
}


export default App
