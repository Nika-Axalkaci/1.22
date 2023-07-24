const initialState = {
  todoList:[],
  counter:0,
}


export const todoReducer = (state = initialState,action)=>{
  switch(action.type){
    case 'ADD_TODO':
      const newTodo = {
        id: state.counter + 1,
        text: action.payload,
        completed:false
      };
    
      return {
        todoList: [...state.todoList, newTodo],
        counter: state.counter + 1,
      };
      case 'DELETE_TODO':
        const updatedTodoList = state.todoList.filter(
          (todo) => todo.id !== action.payload
        );
      return {
        todoList:updatedTodoList,
        counter:state.counter -1
      };
      case "COMPLETE_TODO":
        return {
          todoList: state.todoList.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
          counter: state.counter,
        };

    default:
      return state
  }

}