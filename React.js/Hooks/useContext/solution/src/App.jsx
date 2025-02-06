import { createContext, useContext } from "react"
import { Component1 } from "./Components"

const NameContext = createContext()

function App() {
  const name = "Anshul"

  return (
    <>
      <NameContext.Provider value={name}>
        <Component1 />
      </NameContext.Provider>
    </>
  )
}

export {
  App,
  NameContext
}