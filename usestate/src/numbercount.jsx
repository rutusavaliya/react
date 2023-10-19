import React, { useState } from 'react'

function NumberCount() {
    const [count , setCount] = useState(0)

    const IncreaseAndLog = () => {
        setCount(count + 1)
        console.log(count + 1 )
        
    }

      const   decrement = () => {
        setCount(count - 1)
        console.log(count - 1)
       }



  return (
    <div className=''>
    <button onClick={IncreaseAndLog} className='bg-black h-10 w-36 text-white ml-10 mr-10 mt-10 rounded-sm'>Click to increment</button>
    <button onClick={decrement}  className='bg-black h-10 w-36 text-white ml-10 mr-10 mt-10 rounded-sm'>Click to decrement</button>
    
    </div>
  )
}

export default NumberCount
