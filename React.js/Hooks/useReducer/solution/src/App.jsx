// IN this we have simple TODO app which have just 
// add task and delete task
// but when we enhance it it will be complex and 
// consist more functions

// in all the functions we are calling useState and updating it
// everytime the state is changing and it may overhead the execution
// To reduce this complexity and keep all your logic in one 
// easy-to-access place, you can move that state logic into a 
// single function outside your component, called a “reducer”.

import { useReducer, useState } from 'react'
import './App.css'


// This function directly updates the AllTasks object
function reducer( tasks , action ) {
  switch( action.type ){
    case "add" : {
      return [
        ...tasks , {
          id : action.id,
          text : action.text,
          done : action.done
        }
      ]
    }
    case "remove" : {
      return tasks.filter( (v) => ( v.id !== action.id ) )
    }
    case "toggle" : {
      return tasks.map( ( v ) => ( v.id === action.id ) ?  { ...v , done : !v.done } : v  )  
    }
  }
}

function App() {

  const initialTasks = [
    { id : 1, text : "Learn Hooks", done : false },
    { id : 2, text : "Make sheets", done : true },
    { id : 3, text : "Search AI", done : false },
  ]

  // AllTasks is an object containing all data
  // dispatch is a function containing an object as parameter to define what user just did
  //    simply means that, added, removed, toggled? what user just did
  // reducer is a function that changes and updates allTasks
  // initialTasks are default data

  const [ AllTasks , dispatch ] = useReducer( reducer , initialTasks )
  
  // input value -> newTask
  const [ task , setTask ] = useState("")

  function addTasks( text ){
      dispatch({
        type : "add",
        id : Date.now(),
        text : text,
      })
      setTask("") // after adding the current task make the input empty
  }

  function removeTask( id ){
    dispatch({
      type : "remove",
      id : id
    })
  }

  function toggleTask( id ){
    dispatch({
      type : "toggle",
      id : id
    })
  }

  return (
    <>
      <div className="taskDiv">
        <input type='text' placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value) } />
        <button onClick={() => addTasks(task)} >Add</button>
      </div>
      <div className="allTasks">
        {
          AllTasks.map( ( v ) => (
            <div key={v.id} className='tasks'>
              <span style={{
                textDecoration : v.done ? "line-through" : "none"  
              }} >{v.text}</span>
              <button onClick={ () => removeTask(v.id)  }>Delete</button>
              <input type='checkbox' 
                checked={v.done} 
                onChange={() => toggleTask(v.id)}
                ></input>
            </div>
          ) )
        }
      </div>
    </>
  )
}

export default App