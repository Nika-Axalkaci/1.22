import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletetodoAction, doneTodoAction } from '../store/todo/todo.actions'

const TodoList = () => {
  const {todoList} = useSelector((state)=>state.todo)
  const dispatch = useDispatch()
  const onDelete = (id)=>{
    dispatch(deletetodoAction(id))

  }
  const isDone= (id)=>{
    dispatch(doneTodoAction(id))
  }
  console.log(todoList);
  return (
    <div>
      <Link to={'/create'}>create</Link>
    <div>
    {todoList.map(todo => (
      <div key={todo.id}>
            {todo.text}
            {todo.id}
            <button onClick={()=> onDelete(todo.id)}> DELETE</button>
            <button onClick={()=>isDone(todo.id)}>DONE</button>
          </div>))}
    </div>
  </div>
  )
} 

export default TodoList