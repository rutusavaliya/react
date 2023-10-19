import * as React from "react";
import signimg from './assets/signimg.jpg'
import logo from './assets/logos.png'


function SignUP() {
    return (
        <>

            <div className="flex h-screen">
                <div className="h-full w-[700px] relative">
                    <div>

                    </div>
                    <span className="absolute ps-10 pt-10">
                        <a href="">
                            <img className="h-10" src={logo} alt="" />
                        </a>

                        <h1 className="font-bold mt-12 text-2xl">
                            We offer the Best<br></br> Product
                        </h1>
                    </span>
                    <img className="w-[400px] h-[700px] overflow-hidden fixed -z-10 object-cover" src={signimg} alt=""></img>
                </div>
                <div className="Form-section w-full">
                    <div className="flex justify-end mr-24 mt-5">
                        <p className="mr-7 mt-5 text-sm">Already a member?</p>
                        <button
                            className="border bg-[#ff497c] px-8 py-3 rounded-lg text-white text-lg cursor-pointer"
                            type="text">
                            Sign In
                        </button>
                    </div>

                    <div className=" mt-14 ml-60 overflow-y-auto ">
                        <div className="flex flex-col justify-center">
                            <h1 className=" font-bold text-xl ">I'm New Here </h1>
                            <form action="" className="">
                                <figcaption className="text-gray-500 pt-4 text-xs">Enter your details below</figcaption>

                                <div className="relative mt-8">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600  text-sm">
                                        User Name
                                    </label>
                                    <input
                                        class="w-72 h-12 border mt-2 rounded-lg  px-6 text-gray-500 text-sm "
                                        type="text"
                                        placeholder="anniemario"
                                    ></input>
                                </div>

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
                                <button className="border px-10 py-4 mt-8 rounded-md bg-blue-600 text-white font-semibold cursor-pointer ">
                                    Create Account
                                </button>

                            </form>
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
}

export default SignUP