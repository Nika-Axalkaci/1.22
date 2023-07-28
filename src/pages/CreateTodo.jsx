import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { addTodoThunk } from '../store/todo/todo.thunks'

const CreateTodo = () => {
  const dispatch = useDispatch()
  const [value,setValue] = useState('')
  
  const OnSubmit = (e)=>{
  e.preventDefault()
  dispatch(addTodoThunk(value))
  setValue("")
  }
  return (
    <form onSubmit={OnSubmit}>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button>submit</button>
      <Link to={'/'}>Main</Link>
    </form>
  )
}

export default CreateTodo