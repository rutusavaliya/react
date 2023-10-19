import React from "react";
import parsal from './assets/home/parsal.png'
import Fimg2 from './assets/home/Fimg2.png';
import Fimg3 from './assets/home/Fimg3.png';
import Fimg4 from './assets/home/Fimg4.png';

import email from './assets/home/email.png';
import telephone from './assets/home/telephone.png';
import scanbar from './assets/home/scanbar.png';
import Appimg from './assets/home/Appimg.png';
import Googleimg from './assets/home/Googleimg.png';
import facebook from './assets/home/facebook.png';
import instagram from './assets/home/instagram.png';
import twitter from './assets/home/twitter.png';
import linkedin from './assets/home/linkedin.png';
import pimg from './assets/home/pimg.png';
import cardimg from './assets/home/cardimg.png';
import visaimg from './assets/home/visaimg.png';


export function Footer() {
    return (
        <>
         
        

            <div className="flex justify-center mt-10 w-10/12 mx-auto border-b-2 py-8 ">

                <div>
                    <img className="w-9 mt-2 mr-4 ml-3" src={parsal} alt=""></img>
                </div>
                <div className="mr-10">
                    <p className=" font-bold">Fast $ Secure Delivery</p>
                    <h2 className="text-gray-500">Tell about your service.</h2>
                </div>

                <div>
                    <img className="w-9 mt-2 mr-4 ml-4" src={Fimg2} alt=""></img>
                </div>
                <div className="mr-10 ">
                    <p className="font-bold">Money Back Guarantee</p>
                    <h2 className="text-gray-500">within 10 days.</h2>
                </div>

                <div>
                    <img className="w-9 mt-2 mr-4" src={Fimg3} alt=""></img>
                </div>
                <div className="mr-10">
                    <p className="font-bold">24 Hour Return policy</p>
                    <h2 className="text-gray-500">No question ask.</h2>
                </div>
                <div>
                    <img className="w-9 mt-2 mr-4 " src={Fimg4} alt=""></img>
                </div>
                <div className="mr-10">
                    <p className="font-bold">Pro Quality Support</p>
                    <h2 className="text-gray-500">24/7 Live support.</h2>
                </div>
            </div>

            <div className="flex justify-center py-7 w-10/12 mx-auto border-b-2 my-5">
                <div className="mr-20 ">
                    <h1 className=" font-bold ">Support</h1>
                    <p className="mt-2 text-gray-500">685 Market street,<br></br>
                        Las Vegas, LA 95820,<br></br>
                        united States.</p>
                    <div className="flex mt-5">
                        <img className="w-5 h-5 " src={email} alt=""></img>
                        <p className="ml-2 text-gray-500 ">example@domain.com</p>
                    </div>
                    <div className="flex mt-2">
                        <img className="w-5 h-5" src={telephone} alt=""></img>
                        <p className="text-gray-500">(+01)850-315-5862</p>
                    </div>
                </div>
                <div className="mr-20">
                    <h1 className="font-bold ">Account</h1>
                    <h2 className="mt-2 text-gray-500 ">My Account</h2>
                    <h2 className="mt-2 text-gray-500">Login/Register</h2>
                    <h2 className="mt-2 text-gray-500">cart</h2>
                    <h2 className="mt-2 text-gray-500">Wishlist</h2>
                    <h2 className="mt-2 text-gray-500">shop</h2>
                </div>
                <div className="ml-20">
                    <h1 className="font-bold">Quick Link</h1>
                    <h2 className="mt-2 text-gray-500">privacy Policy</h2>
                    <h2 className="mt-2 text-gray-500">Terms of Use</h2>
                    <h2 className="mt-2 text-gray-500">FAQ</h2>
                    <h2 className="mt-2 text-gray-500">Contact</h2>
                    <h2 className="mt-2 text-gray-500">Contact</h2>
                </div>
                <div className="ml-40">
                    <h1 className="font-bold">Download App</h1>
                    <p className="mt-2 text-gray-500 text-sm">Save $3 with App $ New User only</p>
                    <div className="flex ">
                        <div>
                            <img className="mt-2 w-[84px]" src={scanbar} alt=""></img>
                        </div>
                        <div className="ml-3 mt-2">
                            <img className="w-28" src={Appimg} alt=""></img>
                            <img className="mt-4 w-28" src={Googleimg} alt=""></img>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex  justify-around mt-5 mb-5">
                <div className="flex mt-2">
                    <img className="w-3 h-3 hover:bg-pink-600 rounded-3xl duration-500  " src={facebook} alt=""></img>
                    <img className="w-3 h-3 ml-2" src={instagram} alt=""></img>
                    <img className="w-3 h-3 ml-2" src={twitter} alt=""></img>
                    <img className="w-3 h-3 ml-2" src={linkedin} alt=""></img>
                </div>
                <div>
                    <p className="text-gray-500 text-sm mt-1">© 2023. All rights reserved by Axilthemes.</p>
                </div>
                <div className="flex">
                    <p className="mr-2 text-gray-500">Accept For</p>
                    <img className="mr-2 w-5 h-5 mt-1" src={pimg} alt=""></img>
                    <img className="mr-2 w-7 h-5 mt-1" src={cardimg} alt=""></img>
                    <img className="mr-2 w-10 h-5 mt-1" src={visaimg} alt=""></img>
                </div>
            </div>

        </>
    )
}