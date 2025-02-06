import React, { useContext } from 'react'
import { NameContext } from './App'


function Component1() {
    const username = useContext(NameContext)
  return (
    <>
        <h1>Hello everyone i am {username}</h1>
        <Component2 username={username} />
    </>
  )
}

function Component2(){
    return(
        <>
            <h2>I am a student from svvv</h2>
            <Component3 />
        </>
    )
}
function Component3(){
    return(
        <>
            <h3>I Live in Dewas</h3>
            <Component4 />
        </>
    )
}
function Component4(){
    return(
        <>
            <h3>I am smart</h3>
            <Component5 />
        </>
    )
}
function Component5(){
    const name = useContext(NameContext)
    return(
        <>
            <a href='/'>{name}</a>
        </>
    )
}

export {
    Component1,
    Component2,
    Component3,
    Component4,
    Component5
}