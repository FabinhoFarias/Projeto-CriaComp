import { useState } from 'react'
import InputDesign from './InputDesign.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <InputDesign />
    </>
  )
}

export default App
