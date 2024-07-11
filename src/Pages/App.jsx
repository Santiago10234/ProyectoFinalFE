import { useState } from 'react'
import '../styles/App.css'
import Inicio from './Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Inicio/>
    </>
  )
}

export default App
