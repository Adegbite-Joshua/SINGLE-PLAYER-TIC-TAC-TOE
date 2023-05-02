import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Game from './Components/Game'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>       
      <LandingPage/>
      <Game/>
    </>
  )
}

export default App
