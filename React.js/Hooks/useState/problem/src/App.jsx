import './App.css'

function App() {

  let val = 0;
  function increment(){
    val = val + 1
    console.log("Value -> " , val )
  }

  return (
    <>
      <h1> { val } </h1>
      <button onClick={increment}>CLick me</button>
    </>
  )
}

export default App
