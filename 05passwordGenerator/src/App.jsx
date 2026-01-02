import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "0123456789"
    if (CharAllowed) str += "!@#$%^&*()_+~`="
    let array = Array(length)
    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char)
    }
    
    setPassword()
  }, [length, numberAllowed, CharAllowed, setPassword])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        
    </>
  )
}

export default App
