import * as React from "react";
import { Footer } from "./footer";

function Typography() {
    return(
        <>
        <div className="ml-20 mt-20">
            <div className="flex font-semibold text-5xl">
              <h1>h1- A Visual Type Scale</h1>
              <h1 className="ml-28">46px</h1>   
            </div>
            <div className="flex font-semibold text-4xl pt-8   ">
              <h2>h2- A Visual Type Scale</h2>
              <h2 className="ml-[19%]">36px</h2>   
            </div>
            <div className="flex font-semibold text-3xl pt-8  ">
              <h3>h3- A Visual Type Scale</h3>
              <h3 className="ml-[24%]">28px</h3>   
            </div>
            <div className="flex font-semibold text-2xl pt-8  ">
              <h4>h4- A Visual Type Scale</h4>
              <h4 className="ml-[29%]">24px</h4>   
            </div>
            <div className="flex font-semibold text-xl pt-8 ">
              <h5>h5- A Visual Type Scale</h5>
              <h5 className="ml-[32%]">20px</h5>   
            </div>
            <div className="flex font-semibold text-lg pt-8  ">
              <h6>h6- A Visual Type Scale</h6>
              <h6 className="ml-[33%]">18px</h6>   
            </div>
        </div>


       <div className="ml-20 mt-10">
        <div>
            <p className="text-gray-500">B1- Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta <br></br>minima, provident quos amet non hic animi. Natus dolorum<br></br> reprehenderit debitis voluptatem magnam beatae itaque dicta vitae!<br></br> Magni esse ex rem.</p>
        </div>
        <div className="mt-10">
            <p className="text-gray-500">B2- Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima,<br></br> provident quos amet non hic animi. Natus dolorum reprehenderit debitis<br></br> voluptatem magnam beatae itaque dicta vitae! Magni esse ex rem.</p>
        </div>
        <div className="mt-10 text-sm">
            <p className="text-gray-500">B3- Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima,provident quos amet<br></br> non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta<br></br> vitae! Magni esse ex rem.</p>
        </div>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    );
}

export default Typography