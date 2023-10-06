import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';


export function Home() {
    return (
        <>
         <div className="ml-10">
                    <button type="button">English</button>
                    <ul className="border border-black bg-white w-16 h-20 text-center ">
                        <li className="hover:bg-pink-500 duration-500">English</li>
                        <li className=" hover:bg-pink-500 duration-500">Arabic</li>
                        <li className=" hover:bg-pink-500 duration-500">Spanish</li>
                    </ul>
                </div>
        </>
    )
}

export function USD() {
    return (
        <>
       
                <div className="ml-10">
                    <button type="button">USD</button>
                    <ul className="border border-black bg-white w-16 h-20 text-center ">
                        <li className="hover:bg-pink-500 duration-500">USD</li>
                        <li className=" hover:bg-pink-500 duration-500">AUD</li>
                        <li className=" hover:bg-pink-500 duration-500">EUR</li>
                    </ul>
                </div>
           
        </>
    )
}