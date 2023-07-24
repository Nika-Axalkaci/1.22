import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTodoAction } from '../store/todo/todo.actions'

const CreateTodo = () => {
  const dispatch = useDispatch()
  const [value,setValue] = useState('')
  const onSubmit = (e)=>{
  e.preventDefault()
  dispatch(addTodoAction(value))
  setValue("")
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button>submit</button>
      <Link to={'/'}>Main</Link>
    </form>
  )
}

export default CreateTodo