import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let simpleObject = {
    name: "Garima",
    age: 23
  }

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-4'> Testing Tailwind</h1>
      <Card channel = "Test Channel" randomObject = {simpleObject}  />
      <Card  />
    </>
  )
}


export default App
