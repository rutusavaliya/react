import React, { useEffect, useState } from 'react'

const Task = () => {
    const [selectedFruits , setSelectedFruits] = useState();

    return (
    <>
    <label className='text-xl'>pick a Fruits :
    <select className='ml-3 mb-3' value={selectedFruits}onChange={e => setSelectedFruits(e.target.value)} 
    >
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="kiwi">kiwi</option>

    </select>
    </label>
      <p className='text-3xl font-semibold'>your select Fruits :{selectedFruits}</p>

      </>
  )
}

export default Task
