import { useState } from 'react'
import './App.css'
import { Navbar, Cyber } from './Componentes/'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Cyber />

    </div>
  )
}

export default App
