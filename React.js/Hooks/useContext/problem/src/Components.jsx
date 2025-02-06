import React from 'react'

function Component1( { username } ) {
  return (
    <>
        <h1>Hello everyone i am {username}</h1>
        <Component2 username={username} />
    </>
  )
}

function Component2( { username } ){
    return(
        <>
            <h2>I am a student from svvv</h2>
            <Component3 username={username} />
        </>
    )
}
function Component3( { username } ){
    return(
        <>
            <h3>I Live in Dewas</h3>
            <Component4 username={username} />
        </>
    )
}
function Component4( { username } ){
    return(
        <>
            <h3>I am smart</h3>
            <Component5 username={username} />
        </>
    )
}
function Component5( { username } ){
    return(
        <>
            <a href='/'>{username}</a>
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