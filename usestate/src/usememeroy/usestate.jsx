import { useState } from "react"


const UseStates = () => {

     const [count , setCount] = useState(0);

     function handleIncrement(){
          setCount(count+1);
     }

     function handleDecrement(){
          setCount(count-1)
     }

  return (
    <div className="flex p-2  bg-slate-500 rounded-2xl">
      <button className="pr-2" onClick={handleDecrement}>Decerement</button>
      <button className="pr-2" onClick={handleIncrement}>Increments</button>
      <button className="pr-2"  onClick={() => setCount(count+1)}>Increments</button>
      <button className="pr-2" onClick={() => setCount(count-1)}>Decerement</button>
      <div>
          {count}
      </div>
    </div>
  )
}

export default UseStates