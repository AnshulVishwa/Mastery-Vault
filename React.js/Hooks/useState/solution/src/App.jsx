import { useState } from 'react';
import './App.css'

function App() {

  const [ value , setValue ] = useState(0);
  function increment(){
    setValue( (prev) => prev+1 )
    console.log("Value -> " , value )
  }

  return (
    <>
      <h1> { value } </h1>
      <button onClick={increment}>CLick me</button>
    </>
  )
}

export default App
