import * as React from "react";
import { Home, USD } from './home';
import { Dropdown } from './dropdown';

import Poster1 from './assets/home/Poster1.png';
import Poster2 from './assets/home/Poster2.png';
import giftbox from './assets/home/giftbox.png';
import keyimg from './assets/home/keyimg.png';
import returnimg1 from './assets/home/returnimg1.png';
import returnimg2 from './assets/home/returnimg2.png';
import helpimg from './assets/home/helpimg.png';
// import marketing from './assets/home/marketing.png'
// import letterbox from './assets/home/letterbox.png'
import { Footer } from './footer';


function App() {

  return (
  <>
    <div className=" h-screen bg-[#f9f3f0]">
      <div className=" flex justify-between">
        <div className=" flex">
          <Home />
          <USD />
        </div>
        <div className=" flex justify-between">
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


    <div className="flex justify-center mt-10">
      <div>
        <img className="w-[490px] pr-6 relative" src={Poster1} alt=""></img>
        <div className="absolute top-[163%] left-[30%]">
          <p className="  text-white font-blod text-4xl">Rich sound,<br></br>
            for less.
          </p>
          <h3 className="text-gray-500">collections</h3>
        </div>
      </div>
      <div>

        <img className="w-[490px] pr-6 relative" src={Poster2} alt=""></img>
        <div className="absolute top-[163%] left-[52%]" >
          <h3 className="text-gray-400">50% Offer in Winter</h3>
          <p className="text-white font-bold text-4xl">Get VR<br></br>
            Reality Glass
          </p>
        </div>

      </div>
    </div>


    <div>
      <Footer />
    </div>
  </>

 );
}


export default App
