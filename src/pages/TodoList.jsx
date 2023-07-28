import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTodos } from '../store/todo/todo.thunks'

const TodoList = () => {
  const dispatch = useDispatch()
  const  {todo,loading,error}  = useSelector(state => state.todo)
  useEffect(()=>{
    dispatch(fetchTodos())
  },[])

  if (loading) return <div>loading...</div>
  if(error) return <div>{error}</div>
  return (
  
    <div>
      <Link to={'/create'}>create</Link>
    <div>
  {/* {todo.map(item => <div style={{border: '1px solid red'}} key={item._uuid}> 
            <h3>{item.todoData}</h3>
           
         </div>)} */}
    </div>
  </div>
  )
} 

export default TodoList