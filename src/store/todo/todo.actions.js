export const addTodoAction = (payload)=>({
  type: 'ADD_TODO',
  payload
})
export const deletetodoAction=(payload) =>({
  type:'DELETE_TODO',
  payload
})
 
export const doneTodoAction = (payload)=>({
  type: "COMPLETE_TODO",
  payload
})