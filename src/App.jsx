// App.js
import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {
  const [color, setColor] = useState("olive")

  // Function to update the background color
  const changeColor = (newColor) => {
    setColor(newColor)
  }

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='flex flex-wrap justify-center inset-x-0 px-2 fixed bottom-12'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <Button color="Red" handleClick={changeColor} />
          <Button color="Green" handleClick={changeColor} />
          <Button color="Blue" handleClick={changeColor} />
          <Button color="Purple" handleClick={changeColor} />
          <Button color="Olive" handleClick={changeColor} />
          <Button color="Grey" handleClick={changeColor} />
          <Button color="Black" handleClick={changeColor} />
        </div>
      </div>
    </div>
  )
}

export default App
