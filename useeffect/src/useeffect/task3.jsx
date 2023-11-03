import React from 'react'
import {useState} from 'react';

const Use_state = () => {
    const [count , setcount] = useState(0);

    function increment () {
        setcount(count+1);
    }

    function decrement () {
        setcount(count-1);
    }

    return(
        <>
            <div className='h-screen flex justify-center items-center'>
                  <div className='flex '>
                  <div className='button text-center text-lg '>{count}
                     <div>
                        <button className='button' onClick={increment}>
                        increment
                        </button>
                        <button className='button' onClick={decrement}>
                    decrement
                        </button>
                     </div>
                  </div>

                  </div>
            </div>
        </>
    )
}
 
export default Use_state