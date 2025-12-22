// ALL ABOUT HOOKS IN REACT

import { useState } from 'react'      // 1. useState is a hook that updates evry time the state changes.

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, gudiiCounter]= useState(15)          // 2. useState returns an array with two elements: the current state value and a function to update it.

  // let counter = 15
  
const addValue = () => {
  gudiiCounter(counter + 1);
  console.log("Value Added", counter)
  // counter = counter + 1 
}

const removeValue = () => {
  gudiiCounter(counter - 1)
  console.log("Value Removed", counter)
}
  return (
    <>
      <h1>Garima aur Mai</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick ={addValue}
      >Add Value {counter}</button>
      <br />
      <button onClick = {removeValue}
      >Remove Value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
