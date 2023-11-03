import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Use_Effect_3 from './useeffect/useeffect3'
import Use_Effect_4 from './useeffect/useeffect4'
import Use_Effect_5 from './useeffect/useeffect5'
import Use_Effect_2 from './useeffect/useeffect2'
import Use_Effect from './useeffect/useeffect'
import Side_Effect from './useeffect/sideefect'
import Task from './useeffect/task'
import AxiosFatch from './useeffect/task2'
import Use_state from './useeffect/task3'
import MyComponent from './useeffect/task4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Side_Effect name="rutu"/> */}
    {/* <Use_Effect/> */}
    {/* <Use_Effect_2 /> */}
      {/* <Use_Effect_3/> */}
      {/* <Use_Effect_4 name="rutu"/> */}
      {/* <Use_Effect_5/> */}
      {/* <Task/> */}
      {/* <AxiosFatch/> */}
      {/* <Use_state/> */}
       <MyComponent/>
    </>
  )
}

export default App
