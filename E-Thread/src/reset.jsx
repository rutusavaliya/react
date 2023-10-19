import * as React from "react";
import signimg from './assets/signimg.jpg'
import logo from './assets/logos.png'

function Reset() {
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

                        <h1 className="mt-12 text-2xl font-medium">
                            We offer the Best<br></br> Product
                        </h1>
                    </span>
                    <img className="w-[400px] h-[700px] overflow-hidden fixed -z-10 object-cover" src={signimg} alt=""></img>
                </div>
                <div className="Form-section w-full">
                    <div className="flex justify-end mr-24 mt-12">
                        <p className=" text-sm">Already a member?</p>
                        <button
                            className="text-sm cursor-pointer hover:text-blue-600"
                            type="text">
                            Sign In
                        </button>
                    </div>

                    <div className=" mt-14 ml-60 overflow-y-auto ">
                        <div className="flex flex-col justify-center">
                            <h1 className=" font-bold text-xl ">Reset Password</h1>
                            <form action="" className="">
                                <div className="relative mt-5">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        New Password
                                    </label>
                                    <input
                                        className="w-72 h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"
                                        placeholder="........"
                                    ></input>
                                </div>
                                <div className="relative mt-5">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="w-72 h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm"
                                        type="text"
                                        placeholder="........"
                                    ></input>
                                </div>

                                <button className="border px-6 py-3 mt-8 rounded-md bg-blue-600 text-white font-semibold cursor-pointer ">
                                 Reset Password
                                </button>

                            </form>
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
}
export default Reset