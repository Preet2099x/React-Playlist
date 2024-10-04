
import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)

  const addValue = () => {
    if(counter<30)
      setCounter(counter+1)
  }
  const removeValue = () => {
    if(counter>0)
      setCounter(counter-1)
  }

  return (
    <>
      <h1>React Counter {counter}</h1> 
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <footer>Footer:{counter} </footer>
    </>
  )
}

export default App

  // Interview Question 
  
  // Can we increment multiple like this ?

  // const addValue = ()=> {
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  //   setCounter(counter+1)
  // }

  // No cause react sends values in batches 
  // This can we done by using callbacks like below

  //   const addValue = ()=> {
  //   setCounter((prev)=>prev+1)
  //   setCounter((prev)=>prev+1)
  //   setCounter((prev)=>prev+1)
  //   setCounter((prev)=>prev+1)
  //   setCounter((prev)=>prev+1)
  // }