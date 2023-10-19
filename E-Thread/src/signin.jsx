import * as React from "react";
import sinimg from './assets/sinimg.jpg'
import logo from './assets/logos.png'

function Signin() {
    return(
        <>
            <div className="flex h-screen">
                <div className="h-full w-[700px] relative">
                    <span className="absolute ps-10 pt-8">
                        <a href="">
                            <img className="h-10" src={logo} alt="" />
                        </a>
                        <h1 className="font-medium mt-16 text-2xl">
                            We Offer the Best<br></br> Product
                        </h1>
                    </span>
                    <img className="w-[400px] h-[700px] overflow-hidden fixed -z-10 object-cover" src={sinimg} alt=""></img>
                </div>
                <div className="Form-section w-full">
                    <div className="flex justify-end mr-24 mt-5">
                        <p className="mr-7 mt-5 text-xs"> Not member?</p>
                        <button
                            className="border bg-[#ff497c] px-6 py-4 rounded-lg text-white  cursor-pointer text-sm"
                            type="text">
                            Sign UP Now
                        </button>
                    </div>
                    <div className=" mt-14 ml-60 ">
                        <div className="flex flex-col justify-center ">
                            <h1 className=" font-bold text-xl ">Sign in to e Trade. </h1>
                            <form action="">
                                <figcaption className="text-gray-500 pt-4 text-xs">Enter your details below</figcaption>
                            </form>
                            <from action="">
                               

                                <div className="relative mt-5">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        Email
                                    </label>
                                    <input
                                        className="w-72 h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"
                                        placeholder="annieexample@gmail.com"
                                    ></input>
                                </div>

                                <div className="relative mt-5">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        Password
                                    </label>
                                    <input
                                        className="w-72 h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"
                                        placeholder="......."
                                    ></input>
                                </div>
                                <div className="flex mt-8">
                                <button className="border px-8 py-3  rounded-md bg-blue-600 text-white font-semibold cursor-pointer ">
                                    Sign In
                                </button>
                                <p className="pl-20 mt-2 text-blue-600 text-xs">Forget Password?</p>
                               </div>
                            </from>
                        </div>



                    </div>
</div>
                </div>
        </>
    )
}

export default Signin