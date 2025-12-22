// ALL ABOUT HOOKS IN REACT


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 5
  
  const addValue = () => {
    console.log("Value Added", Math.random());
}
  return (
    <>
      <h1>Garima aur Mai</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick ={addValue}
      >Add Value</button>
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
