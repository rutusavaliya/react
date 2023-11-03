import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Use_State_Demo from './Hook_reducer/usesttedemo'
import Use_Reducer from './Hook_reducer/use_reducer'
import Use_Reducer_Multiple from './Hook_reducer/use_mutiple_file'
import Use_Reducer_Multiple_2 from './Hook_reducer/use_mutiple_file2'
import Use_Reducer_Multiple_3 from './Hook_reducer/use_mutiple_file3'
import Use_Reducer_Multiple4 from './Hook_reducer/use_mutiple_file4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Use_State_Demo/> */}
     {/* <Use_Reducer/> */}
     {/* <Use_Reducer_Multiple/> */}
     {/* <Use_Reducer_Multiple_2/> */}
     {/* <Use_Reducer_Multiple_3/> */}
     <Use_Reducer_Multiple4/>
    </>
  )
}

export default App
