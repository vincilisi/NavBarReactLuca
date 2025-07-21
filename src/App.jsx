import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {
  let title = 'Prova NavFiga'

  return (
    <>
    <Navbar />
    <h1>{title}</h1>
    </>
  )
}

export default App
