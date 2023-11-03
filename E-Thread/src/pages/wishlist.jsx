import React from 'react'
import { Footer } from '../components/footer'
import { English, USD } from "../components/navbar"
import { Dropdown1, NavBottom } from "../components/navbar1"

function Wishlist() {
  return (
    <>
      <div className=" flex justify-between h-8 text-xs pt-1 bg-black">
        <div className=" flex">
          <English />
          <USD />
        </div>
        <div className=" flex justify-between mr-48 text-gray-400 font-semibold">
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

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Wishlist
