
import React from 'react';
import { useState } from 'react'
import './App.css'


function App() {
 
  const [counter, setCounter] = useState(5);

  const handleClick1 = () => {
    setCounter(counter+1)
  }

  const handleClick2 = () => {
    setCounter(counter-1)
    if (counter === 0) {
      setCounter(counter)
    }
  }
  

  return (
    <>
    <h1>{counter}</h1>
    <button onClick={handleClick1} >decrease {counter}</button>
    <button onClick={handleClick2} >increase {counter}</button>
    </>
  )
}

export default App
