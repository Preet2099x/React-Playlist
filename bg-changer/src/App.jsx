import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color,setColor] = useState('')


  const changeColor = (newColor)=> {
    setColor(newColor)
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen ' style={{backgroundColor:color}}>
      <h1 className='text-4xl mb-60'>Background Canvas Changer</h1>
      <div className='bg-black rounded-lg text-white w-fit h-16 flex justify-end items-end  '>
        <button className='bg-red-500 p-5 ' onClick={()=>changeColor('#f87171')}>Red</button>
        <button className='bg-green-600 p-5 ' onClick={()=>changeColor('#34d399')}>Green</button>
        <button className='bg-blue-600 p-5 ' onClick={()=>changeColor('#3b82f6')}>Blue</button>
        <button className='bg-yellow-400 p-5 ' onClick={()=>changeColor('#3b82f6')}>Yellow</button>
        <button className='bg-orange-500 p-5 ' onClick={()=>changeColor('#f97316')}>Orange</button>
        <button className='bg-pink-500 p-5 ' onClick={()=>changeColor('#ec4899')}>Pink</button>
      </div>
    </div>
  )
}

export default App
