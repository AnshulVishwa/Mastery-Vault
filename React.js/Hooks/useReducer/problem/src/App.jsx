// IN this we have simple TODO app which have just 
// add task and delete task
// but when we enhance it it will be complex and 
// consist more functions

// in all the functions we are calling useState and updating it
// everytime the state is changing and it may overhead the execution
// To reduce this complexity and keep all your logic in one 
// easy-to-access place, you can move that state logic into a 
// single function outside your component, called a “reducer”.

import { useState } from 'react'
import './App.css'
function App() {

  const initialTasks = [
    { id : 1, text : "Learn Hooks", done : false },
    { id : 2, text : "Make sheets", done : true },
    { id : 3, text : "Search AI", done : false },
  ]

  const [ task , setTask ] = useState("")
  const [ allTasks , setAllTasks ] = useState( initialTasks )

  function addTasks(){
      setAllTasks([ ...allTasks , {
        id : `${allTasks.length+1}`,
        text : task,
        done : false
      } ])
  }

  function removeTask( id ){
    setAllTasks( allTasks.filter( ( filterTask ) => (filterTask.id != id) ) )
  }

  return (
    <>
      <div className="taskDiv">
        <input type='text' placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value) } />
        <button onClick={addTasks} >Add</button>
      </div>
      <div className="allTasks">
        {
          allTasks.map( ( v ) => (
            <div className='tasks'>
              <span>{v.text}</span>
              <button onClick={ () => removeTask(v.id)  }>Delete</button>
              <input type='checkbox' value={v.done} onChange={(e) => v.done = e.target.value}></input>
            </div>
          ) )
        }
      </div>
    </>
  )
}

export default App