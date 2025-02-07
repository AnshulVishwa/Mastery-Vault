import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { useEffect } from 'react'

function App() {

  useEffect( () => {
    document.querySelector(".login").style.display = "block"
    document.querySelector( ".cancel" ).addEventListener("click" , () => {
      document.querySelector(".login").style.display = "none"
    })
  } , [] )

  return (
    <>
      <Login />
    </>
  )
}

export default App
